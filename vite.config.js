import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will make Vite listen on 0.0.0.0, exposing it to your network
    port: 5173, // Or whatever port Vite is using
  },

})
