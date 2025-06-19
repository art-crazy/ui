import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import { fileURLToPath } from 'url';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        libInjectCss(),
        dts({
            tsconfigPath: './tsconfig.json',
            insertTypesEntry: true,
            copyDtsFiles: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '',
                includePaths: [path.resolve(__dirname, 'src')],
            },
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ui-hookapedia',
            formats: ['es', 'cjs'],
            fileName: (format) => `ui-hookapedia.${format === 'es' ? 'js' : 'cjs'}`,
        },
        rollupOptions: {
            external: [
                /^react/,
                /^next/,
                'react',
                'react-dom',
                'next'
            ],
            output: {
                dir: 'dist',
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        minify: false,
        cssCodeSplit: false,
    },
});
