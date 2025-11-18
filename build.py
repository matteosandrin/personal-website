from jinja2 import FileSystemLoader, Environment
from PIL import Image
import datetime
import json
import os
import sys

if len(sys.argv) < 4:
    print(
        "usage: python build.py <data_filepath> <template_dir> <destination_dir>",
        file=sys.stderr,
    )
    print(
        "  <data_filepath>   A JSON file containing data to inject into the templates.",
        file=sys.stderr,
    )
    print(
        "  <template_dir>    The directory where the Jinja/HTML templates are located.",
        file=sys.stderr,
    )
    print(
        "  <destination_dir> The directory where the built templates will be output to.",
        file=sys.stderr,
    )
    exit(1)

DATA_FILEPATH = os.path.abspath(sys.argv[1])
TEMPLATE_DIR = os.path.abspath(sys.argv[2])
DESTINATION_DIR = os.path.abspath(sys.argv[3])


def filter_templates(t):
    t_name = os.path.basename(t)
    is_allowed_extension = t.endswith(".html") or t.endswith(".txt")
    is_partial = t.startswith("_partials") or t_name.startswith("_")
    return is_allowed_extension and (not is_partial)


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
    print(" * ({}, {}) {}".format(width, height, image_url))
    return {
        "url": image_url,
        "width": width,
        "height": height,
    }


def process_images(data):
    if isinstance(data, dict):
        for key, value in data.items():
            data[key] = process_images(value)
    elif isinstance(data, list):
        for i, value in enumerate(data):
            data[i] = process_images(value)
    elif isinstance(data, str) and data.startswith("/assets/img/"):
        return process_single_image(data)
    return data


def format_iso_date(str_date, format=None):
    date = datetime.datetime.fromisoformat(str_date)
    if format is not None:
        return date.strftime(format)
    return date.isoformat()


def cars_sort_date_desc(cars):
    key = lambda c: datetime.datetime.fromisoformat(c["date"])
    return sorted(cars, reverse=True, key=key)


def cars_sort_star_first(cars):
    # sort by date, descending
    cars = cars_sort_date_desc(cars)
    return [c for c in cars if c["star"]] + [c for c in cars if not c["star"]]


def add_custom_filters(env):
    env.filters["format_iso_date"] = format_iso_date
    env.filters["cars_sort_star_first"] = cars_sort_star_first
    env.filters["cars_sort_date_desc"] = cars_sort_date_desc


data = load_data(DATA_FILEPATH)
print("Processing images:")
data = process_images(data)
loader = FileSystemLoader(TEMPLATE_DIR)
env = Environment(loader=loader)
add_custom_filters(env)
print("Generating templates:")
for t in env.list_templates(filter_func=filter_templates):
    print(" * {}".format(t))
    template = env.get_template(t)
    output_filename = os.path.join(DESTINATION_DIR, t)
    os.makedirs(os.path.dirname(output_filename), exist_ok=True)
    template.stream(data).dump(output_filename)
