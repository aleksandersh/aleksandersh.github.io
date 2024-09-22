SHELL = /bin/sh

.PHONY: start-vite
start-vite:
	docker build -t aleksandersh_github_io_vite -f Dockerfile .
	docker run -p 5173:5173 aleksandersh_github_io_vite

.PHONY: start-vite-preview
start-vite-preview:
	docker build -t aleksandersh_github_io_vite_preview -f VitePreviewDockerfile .
	docker run -p 4173:4173 aleksandersh_github_io_vite_preview
