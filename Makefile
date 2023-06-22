SRC_DIR = ./public
DST_DIR = ./build

build: clean copy-assets build-templates build-tailwind

build-templates:
	pip install -r requirements.txt
	python3 build-templates.py ${SRC_DIR} ${DST_DIR}

build-tailwind:
	npm install
	npx tailwind -i ${SRC_DIR}/assets/css/index.css -o ${DST_DIR}/assets/css/index.css

copy-assets:
	rsync -av --exclude='*.html' --exclude='*.css' ${SRC_DIR}/ ${DST_DIR}

clean:
	rm -rf $(DST_DIR)

.PHONY: build build-templates build-tailwind copy-assets clean