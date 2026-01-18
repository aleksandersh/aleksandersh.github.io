FROM node:20.18-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm ci
EXPOSE 5173
ENTRYPOINT ["/bin/sh", "-c", "npx eleventy --watch & npx vite --host --port 5173 --strictPort"]
