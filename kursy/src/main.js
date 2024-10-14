import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainHome from './components/MainHome.vue';
import UserDashboard from './components/UserDashboard.vue';
import AllCourses from './components/AllCourses.vue';
import UserLogin from './components/UserLogin.vue';

const routes = [
  { path: '/', component: MainHome },
  { path: '/dashboard', component: UserDashboard },
  { path: '/courses', component: AllCourses },
  { path: '/login', component: UserLogin }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');