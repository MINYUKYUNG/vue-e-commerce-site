import { createApp } from 'vue';
import App from './App.vue';
import './app.css';
import router from './routes';
import store from './store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
