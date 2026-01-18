import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: '_site',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                home: resolve(__dirname, '_site/index.html'),
                about: resolve(__dirname, '_site/about.html'),
                json_minifier: resolve(__dirname, '_site/json-minifier.html'),
                old_tools: resolve(__dirname, '_site/old-tools.html'),
                uuid_generator: resolve(__dirname, '_site/uuid-generator.html'),
            },
        },
    },
});
