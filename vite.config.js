import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1500, // Increase warning limit to 1.5MB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lottie: ['lottie-web', 'react-lottie'],
          vendor: [
            'axios',
            'lucide-react',
            '@clerk/clerk-react',
            'react-slick',
            'slick-carousel',
            'react-icons'
          ],
          // Split react-router-dom separately if it's large
          router: ['react-router-dom'],
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
      onwarn(warning, warn) {
        if (warning.code === 'EVAL' && warning.id?.includes('lottie-web')) return;
        warn(warning);
      }
    }
  }
});