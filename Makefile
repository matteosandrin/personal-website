DATA_DIR = ./data
TEMPLATE_DIR = ./public
DESTINATION_DIR = ./build
PROD_DIR = ./prod
DATA_FILEPATH = ${DATA_DIR}/templates-data.json

build: clean copy-assets build-templates build-tailwind

install: dependencies build

prod: install
	mv ${DESTINATION_DIR} ${PROD_DIR}

dependencies:
	pip3 install -r requirements.txt
	npm install

build-templates:
	python3 build.py ${DATA_FILEPATH} ${TEMPLATE_DIR} ${DESTINATION_DIR}

build-tailwind:
	npx tailwind -i ${TEMPLATE_DIR}/assets/css/index.css -o ${DESTINATION_DIR}/assets/css/index.css

copy-assets:
	rsync -av --exclude='*.html' --exclude='*.css' --exclude='_partials' ${TEMPLATE_DIR}/ ${DESTINATION_DIR}
	cp node_modules/photoswipe/dist/*.min.js ${DESTINATION_DIR}/assets/js/
	cp node_modules/photoswipe/dist/*.css ${DESTINATION_DIR}/assets/css/

watch: build
	watchmedo shell-command \
		--recursive --verbose --wait --interval=1 \
		--command='make build' \
		${TEMPLATE_DIR} ${DATA_DIR}

serve:
	python3 -m http.server --directory ${DESTINATION_DIR} 8080

clean:
	rm -rf $(DESTINATION_DIR)
	rm -rf $(PROD_DIR)

format:
	npx prettier ${TEMPLATE_DIR} --write
	python -m black *.py

.PHONY: build install prod dependencies build-templates build-tailwind copy-assets watch serve clean format