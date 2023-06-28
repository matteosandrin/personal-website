from jinja2 import FileSystemLoader, Environment
from PIL import Image
import json
import sys
import os

if len(sys.argv) < 4:
    print("usage: python build-templates.py <data_filepath> <template_dir> <destination_dir>", file=sys.stderr)
    exit(1)

DATA_FILEPATH = os.path.abspath(sys.argv[1])
TEMPLATE_DIR = os.path.abspath(sys.argv[2])
DESTINATION_DIR = os.path.abspath(sys.argv[3])

def filter_templates(t):
    return t.endswith(".html") and (not t.startswith("templates"))

def load_data(data_filepath):
    if not os.path.exists(data_filepath):
        print("ERROR: invalid jinja data file", file=sys.stderr)
        exit(1)
    data = json.load(open(data_filepath))
    return data

def process_single_image(image_url):
    img_partial_path = image_url
    if img_partial_path.startswith("/"):
        img_partial_path = img_partial_path[1:]
    img_filepath = os.path.join(TEMPLATE_DIR, img_partial_path)
    im = Image.open(img_filepath)
    width, height = im.size
    return {
        "url" : image_url,
        "width" : width,
        "height" : height,
    }

def process_images(data):
    for key, value in data.items():
        if isinstance(value, dict):
            data[key] = process_images(value)
        if isinstance(value, list):
            data[key] = list(map(process_single_image, value))
    return data

data = load_data(DATA_FILEPATH)
data = process_images(data)
loader = FileSystemLoader(TEMPLATE_DIR)
env = Environment(loader=loader)
print("Generating templates:")
for t in env.list_templates(filter_func=filter_templates):
    print("    ", t)
    template = env.get_template(t)
    output_filename = os.path.join(DESTINATION_DIR, t)
    os.makedirs(os.path.dirname(output_filename), exist_ok=True)
    template.stream(data).dump(output_filename)
