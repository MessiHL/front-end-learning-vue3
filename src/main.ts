import { createApp } from 'vue'
import App from './App.vue'
import Auth from './directives/auth'

const app =  createApp(App)

// // 全局 property
// app.config.globalProperties.foo = 'test'
// //  全局组件
// app.component('Card',Card)


app.use(Auth).mount('#app')
