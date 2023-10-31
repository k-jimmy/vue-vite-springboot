import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // 在开发环境中，你可以使用代理来绕过跨域问题。Vite 提供了一个配置项来设置代理。在项目根目录的 vite.config.js 文件中，添加以下内容：
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 定义一个别名'@'.该别名对应于当前javascript模块文件所在目录下的'src'目录的绝对文件路径
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
