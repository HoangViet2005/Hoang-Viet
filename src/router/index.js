import { createRouter, createWebHistory } from 'vue-router';
import Lab2Page from '../components/Lab2.vue';
import Lab2Bai2 from '../components/Lab2Bai2.vue';
import Lab1 from '../components/Lab1.vue';
import Post from '../components/Post.vue'; 


const routes = [
  { path: '/lab2Bai1', component: Lab2Page },
  { path: '/lab2Bai2', component: Lab2Bai2 },
  { path: '/lab1', component: Lab1 },
  { path: '/post', component: Post },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
