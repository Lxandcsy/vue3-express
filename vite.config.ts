import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

interface UserConfigExport {
  pluginOptions? : any
}
const config: UserConfigExport = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
