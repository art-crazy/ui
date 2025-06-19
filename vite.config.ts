import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
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
            entry: {
                LayoutWrapper: path.resolve(__dirname, 'src/components/hoc/LayoutWrapper.tsx'),
                Header: path.resolve(__dirname, 'src/components/Header/Header.tsx'),
                Footer: path.resolve(__dirname, 'src/components/Footer/Footer.tsx'),
            },
            name: 'ui-hookapedia',
            formats: ['es', 'cjs'],
            fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
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
                preserveModules: true,
                dir: 'dist',
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        minify: false,
    },
});
