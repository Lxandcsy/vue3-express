import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        // 例如，如果你的项目中有全局的 Sass 变量文件，可以通过 `additionalData` 选项引入它
        additionalData: `@import "@/styles/global.sass";` // `@import` 路径可能需要根据项目调整
      },
      scss: {
        // 例如，如果你的项目中有全局的 SCSS 变量文件，可以通过 `additionalData` 选项引入它
        additionalData: `@import "@/styles/global.scss";` // `@import` 路径可能需要根据项目调整
      }
    }
  },
  server: {
    port: 5050,
    open: true,
    cors: true
  },
  resolve: {
    alias: {
      '@': '/src' // 设置 @ 别名指向 src 目录
    }
  }
})

