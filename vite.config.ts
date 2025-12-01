import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/67fcacf6-d880-4ccf-8a59-3d8bd92bb6e7/preview',
  plugins: [react()],
  server: {
    port: 5192,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5192,
    },
  },
})
