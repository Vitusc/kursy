import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainHome from './components/MainHome.vue';
import UserLogin from './components/UserLogin.vue';
import UserDashboard from './components/UserDashboard.vue';
import UserRegistration from './components/UserRegistration.vue';
import AllCourses from './components/AllCourses.vue';

const routes = [
  { path: '/', component: MainHome },
  { path: '/login', component: UserLogin },
  { path: '/dashboard', component: UserDashboard },
  { path: '/registration', component: UserRegistration },
  { path: '/courses', component: AllCourses },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
