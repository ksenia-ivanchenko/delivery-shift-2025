import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { open: true },
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src/utils/api'),
      components: path.resolve(__dirname, 'src/components'),
      'ui-kit': path.resolve(__dirname, 'src/ui-kit'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      cookies: path.resolve(__dirname, 'src/utils/cookies'),
      store: path.resolve(__dirname, 'src/utils/store'),
      helpers: path.resolve(__dirname, 'src/utils/helpers'),
      constants: path.resolve(__dirname, 'src/utils/constants'),
      hooks: path.resolve(__dirname, 'src/utils/hooks')
    }
  }
});
