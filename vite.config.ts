import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

// Only import devtools in development
// let vueDevTools: any
// if (process.env.NODE_ENV !== 'production') {
//   vueDevTools = require('vite-plugin-vue-devtools')
// }

export default defineConfig(({ command }) => {
  const plugins: PluginOption[] = [vue()]

  // if (command === 'serve' && vueDevTools) {
  //   plugins.push(vueDevTools())
  // }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3000,
    },
  }
})
