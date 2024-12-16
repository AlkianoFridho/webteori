import { createRouter, createWebHistory } from 'vue-router'; // Tidak menggunakan 'default'
import Home from '../components/Home.vue';
import Cart from '../components/Cart.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Menu from '../components/Menu.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/menu', name: 'Menu', component: Menu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
