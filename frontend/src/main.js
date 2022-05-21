import { createApp } from 'vue'
import App from './App.vue'


let app=createApp(App)
app.config.globalProperties.backURL = 'http://localhost:3000'
app.mount('#app')
