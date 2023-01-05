import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createPinia } from "pinia";
import { pinia } from './plugin/Pinia'
import '@/style/style.css'
import '@/style/icon/iconfont.css'
import 'element-plus/theme-chalk/el-message.css';

// const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia)

app.mount('#app')
