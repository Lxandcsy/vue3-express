import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// elementPlus的css
import 'element-plus/dist/index.css'
// elementPlus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// elementPlus的Icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(router)
// 国际化配置
app.use(ElementPlus, {
    locale: zhCn
})
// elementPlus图标配置
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
