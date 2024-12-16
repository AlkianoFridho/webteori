import { createApp } from 'vue';
import Coffeshop from './App.vue'; // Make sure this is the correct path
import router from './router'; // Import the router instance from your router configuration file

createApp(Coffeshop)
  .use(router) // This tells Vue to use the router
  .mount('#app');
