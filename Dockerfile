FROM node:latest
WORKDIR /usr/src/app
RUN npm i vite
COPY . .
EXPOSE 5173
ENTRYPOINT ["npx", "vite", "--host", "--port", "5173", "--strictPort"]
