
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Define __dirname for ESM


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

})

