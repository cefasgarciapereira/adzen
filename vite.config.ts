import path from 'path'
import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        tailwindcss(),
        Unfonts({
            custom: {
              families: [
                {
                  name: 'Geist',
                  src: './src/assets/fonts/geist/*.woff2',
                },
              ],
            },
          }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
