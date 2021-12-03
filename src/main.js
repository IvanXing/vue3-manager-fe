import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

console.log('环境变量=>', import.meta.env)

const app = createApp(App);

app.use(router).use(ElementPlus).mount('#app')
