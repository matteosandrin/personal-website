SRC_DIR = ./public
DST_DIR = ./build

build: clean dependencies copy-assets build-templates build-tailwind

dirty-build: copy-assets build-templates build-tailwind

dependencies:
	pip install -r requirements.txt
	npm install

build-templates:
	python3 build-templates.py ${SRC_DIR} ${DST_DIR}

build-tailwind:
	npx tailwind -i ${SRC_DIR}/assets/css/index.css -o ${DST_DIR}/assets/css/index.css

watch-tailwind:
	npx tailwind -i ${SRC_DIR}/assets/css/index.css -o ${DST_DIR}/assets/css/index.css --watch

copy-assets:
	rsync -av --exclude='*.html' --exclude='*.css' --exclude='includes' ${SRC_DIR}/ ${DST_DIR}

clean:
	rm -rf $(DST_DIR)

.PHONY: build dirty-build build-templates build-tailwind copy-assets clean