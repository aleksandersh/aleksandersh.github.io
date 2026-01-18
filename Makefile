SHELL = /bin/sh
NODE_IMAGE ?= node:20.18-alpine

.PHONY: start-dev
start-dev:
	docker compose up --build

.PHONY: start-vite-preview
start-vite-preview:
	docker build -t aleksandersh_github_io_vite_preview -f VitePreviewDockerfile .
	docker run --rm -p 4173:4173 aleksandersh_github_io_vite_preview

.PHONY: refresh-lock
refresh-lock:
	docker run --rm -u "$(shell id -u):$(shell id -g)" \
		-v "$(PWD)":/usr/src/app -w /usr/src/app \
		$(NODE_IMAGE) npm install --package-lock-only

.PHONY: build
build:
	docker run --rm -u "$(shell id -u):$(shell id -g)" \
		-v "$(PWD)":/usr/src/app -w /usr/src/app \
		$(NODE_IMAGE) sh -c "npm ci && npm run build"
