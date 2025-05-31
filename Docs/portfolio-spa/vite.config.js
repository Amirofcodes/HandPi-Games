// frontend/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    root: 'docs/portfolio-spa',
    base: '/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: process.env.VITE_PORT || 3000,
        host: process.env.VITE_HOST || 'localhost',
        proxy: {
            '/api': {
                target: process.env.VITE_API_URL || 'http://localhost:5001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    build: {
        outDir: '../../deploy/portfolio-dist',
        emptyOutDir: true,
        sourcemap: true,
        minify: 'esbuild',
    },
});
