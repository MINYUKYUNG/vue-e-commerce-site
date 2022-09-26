import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src')},
      { find: '@apis', replacement: resolve(__dirname, 'src/apis')},
      { find: '@assets', replacement: resolve(__dirname, 'src/assets')},
      { find: '@components', replacement: resolve(__dirname, 'src/components')},
      { find: '@pages', replacement: resolve(__dirname, 'src/pages')},
      { find: '@routes', replacement: resolve(__dirname, 'src/routes')},
      { find: '@store', replacement: resolve(__dirname, 'src/store')},
    ],
  },
});