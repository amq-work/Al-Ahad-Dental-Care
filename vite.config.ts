import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/Al-Ahad-Dental-Care/' : '/',
    plugins: [react()],
  }
})
