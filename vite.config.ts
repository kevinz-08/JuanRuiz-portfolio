import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/motion/') || id.includes('node_modules/@motionone/')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/@emailjs/')) {
            return 'vendor-email';
          }
          if (id.includes('node_modules/@radix-ui/')) {
            return 'vendor-radix';
          }
          if (id.includes('node_modules/lucide-react/') || id.includes('node_modules/react-icons/')) {
            return 'vendor-icons';
          }
        },
      },
    },
  },
})
