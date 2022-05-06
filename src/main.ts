import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/common/Card.vue'

const app =  createApp(App)

// 全局 property
app.config.globalProperties.foo = 'test'

app.component('Card',Card)
.mount('#app')
