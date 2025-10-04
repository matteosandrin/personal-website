DATA_FILEPATH = ./templates-data.json
TEMPLATE_DIR = ./public
DESTINATION_DIR = ./build
PROD_DIR = ./prod

build: clean copy-assets build-templates build-tailwind

install: dependencies build

prod: install
	mv ${DESTINATION_DIR} ${PROD_DIR}

dependencies:
	pip3 install -r requirements.txt
	npm install

build-templates:
	python3 build-templates.py ${DATA_FILEPATH} ${TEMPLATE_DIR} ${DESTINATION_DIR}

build-tailwind:
	npx tailwind -i ${TEMPLATE_DIR}/assets/css/index.css -o ${DESTINATION_DIR}/assets/css/index.css

watch-tailwind:
	npx tailwind -i ${TEMPLATE_DIR}/assets/css/index.css -o ${DESTINATION_DIR}/assets/css/index.css --watch

copy-assets:
	rsync -av --exclude='*.html' --exclude='*.css' --exclude='_partials' ${TEMPLATE_DIR}/ ${DESTINATION_DIR}
	cp node_modules/photoswipe/dist/*.min.js ${DESTINATION_DIR}/assets/js/
	cp node_modules/photoswipe/dist/*.css ${DESTINATION_DIR}/assets/css/

watch: build
	cd ${TEMPLATE_DIR} && watchmedo shell-command \
		--recursive --verbose --wait --interval=1 \
		--command='cd .. && make build'

serve:
	python3 -m http.server --directory ${DESTINATION_DIR}

clean:
	rm -rf $(DESTINATION_DIR)
	rm -rf $(PROD_DIR)

.PHONY: build prod build-templates build-tailwind copy-assets clean watch serve