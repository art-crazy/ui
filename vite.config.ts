import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        // libInjectCss(),
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
            entry: 'src/index.ts',
            name: 'UiHookapedia',
            fileName: 'ui-hookapedia',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'next'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    next: 'Next',
                },
            },
        },
        sourcemap: true,
    },
});
