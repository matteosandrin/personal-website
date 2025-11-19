# Matteo's Personal Website (https://sandr.in)

This repository holds the templates and assets for my personal website. There is
a Makefile in the root of this repository that contains all the commands needed
to build the templates and assets into a static website.

The following commands are available:

| Command       | Description                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `make build`  | Install Python/JS dependencies, copy static assets to `./build`, build Jinja templates and build Tailwind CSS files.                |
| `make serve`  | Launch a webserver that serves the files in `./build`                                                                               |
| `make watch`  | Launch a watchdog instance that looks for file changes in `./public` and runs `make build` automatically when a change is detected. |
| `make format` | Format JS, HTML and Python files with Prettier and Black.                                                                           |
