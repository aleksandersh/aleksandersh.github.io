FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm ci
EXPOSE 5173
ENTRYPOINT ["npx", "vite", "--host", "--port", "5173", "--strictPort"]
