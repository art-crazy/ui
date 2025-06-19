import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        react(),
        dts({ insertTypesEntry: true }),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'SchoolUIKit',
            fileName: 'school-ui-kit',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
        },
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
