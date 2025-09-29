import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                json_minifier: resolve(__dirname, 'json-minifier.html'),
                old_tools: resolve(__dirname, 'old-tools.html'),
                uuid_generator: resolve(__dirname, 'uuid-generator.html'),
            },
        },
    },
});
