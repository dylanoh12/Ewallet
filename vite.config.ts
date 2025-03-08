import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/Ewallet/',  // Make sure this matches your repository name exactly (case-sensitive)
  plugins: [react()]
})
