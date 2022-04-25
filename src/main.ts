import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/common/Card.vue'

createApp(App)
.component('Card',Card)
.mount('#app')
