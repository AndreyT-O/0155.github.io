import { fileURLToPath, URL } from 'node:url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/0155.github.io/" : "/",
  plugins: [
    vue(), 
    vueJsx(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
      customDomId: 'sprite-basic',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/views/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/views/pages', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/helpers/mixins.scss";
          @import "./src/assets/scss/helpers/variables.scss";
        `
      }
    }
  }
});
