import { createApp } from 'vue';
import App from './App.vue';

let app = createApp(App);
if (process.env.NODE_ENV == 'development') {
  app.config.globalProperties.backURL = 'http://localhost:3000/api';
  app.config.globalProperties.socketioURL = 'ws://localhost:3001';
} else {
  let hostname = window.location.hostname;
  app.config.globalProperties.backURL = `http://${hostname}:3000/api`;
  app.config.globalProperties.socketioURL = `ws://${hostname}:3001`;
}

app.mount('#app');
