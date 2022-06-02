import { createApp } from 'vue'
import App from './App.vue'


let app=createApp(App)
app.config.globalProperties.backURL = 'http://localhost:3000/api'
app.config.globalProperties.socketioURL = 'ws://localhost:3001'
app.mount('#app')
