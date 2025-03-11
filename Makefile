DATA_FILEPATH = ./templates-data.json
TEMPLATE_DIR = ./public
DESTINATION_DIR = ./build
PROD_DIR = ./prod

build: clean dependencies copy-assets build-templates build-tailwind

dirty-build: copy-assets build-templates build-tailwind

prod: build
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

watch:
	watchmedo shell-command \
		--patterns="*.html;*.css;*.js;*.json;*.xml;*.jpg;*.png;*.svg" \
		--recursive \
		--verbose \
		--command='make dirty-build'

serve:
	python3 -m http.server --directory ${DESTINATION_DIR}

clean:
	rm -rf $(DESTINATION_DIR)
	rm -rf $(PROD_DIR)

.PHONY: build prod dirty-build build-templates build-tailwind copy-assets clean watch serve