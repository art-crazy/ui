import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
    plugins: [
        react(),
        dts({ insertTypesEntry: true }),
        libInjectCss(),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'uiHookapedia',
            fileName: 'ui-hookapedia',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
        },
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
