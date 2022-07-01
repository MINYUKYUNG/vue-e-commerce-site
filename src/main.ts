import { createApp } from 'vue'
import App from './App.vue'
import './app.css';
import router from './routes/index.js'
import store from './store/index.js'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')