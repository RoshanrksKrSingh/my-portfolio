import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',        // Base public path (important for correct asset loading)
  build: {
    outDir: 'dist',  // Output directory for build files (default is 'dist')
    sourcemap: false // Optional: disable sourcemaps in production to keep it clean
  },
  server: {
    open: true      // Optional: opens browser automatically in dev mode
  }
})
