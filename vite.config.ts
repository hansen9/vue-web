import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const plugins: PluginOption[] = [vue()]

  if (command === 'serve') {
    plugins.push(vueDevTools())
  }
  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
