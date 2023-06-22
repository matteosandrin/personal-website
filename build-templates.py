from jinja2 import FileSystemLoader, Environment
import sys
import os


def filter_templates(t):
    return t.endswith(".html") and (not t.startswith("includes"))


if len(sys.argv) < 3:
    print("usage: python build-templates.py <src_dir> <dst_dir>")
    exit(1)

SRC_DIR = os.path.abspath(sys.argv[1])
DST_DIR = os.path.abspath(sys.argv[2])

loader = FileSystemLoader(SRC_DIR)
env = Environment(loader=loader)
print("Generating templates:")
for t in env.list_templates(filter_func=filter_templates):
    print("    ", t)
    template = env.get_template(t)
    output_filename = os.path.join(DST_DIR, t)
    os.makedirs(os.path.dirname(output_filename), exist_ok=True)
    template.stream(var="test").dump(output_filename)
