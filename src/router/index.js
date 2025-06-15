import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import RegisterView from '../components/RegisterView.vue';
import MainPage from '@/components/MainPage.vue';
import Standart from '@/components/Standart.vue';
import WeightLoss from '@/components/WeightLoss.vue';
import WeightGain from '@/components/WeightGain.vue';
import Vegetarian from '@/components/Vegetarian.vue';
import Detox from '@/components/Detox.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: MainPage },
  { path: '/register', component: RegisterView},
  { path: '/standart_program', component: Standart},
  { path: '/weight_loss_program', component: WeightLoss},
  { path: '/weight_gain_program', component: WeightGain},
  { path: '/vegetarian_program', component: Vegetarian},
  { path: '/detox_program', component: Detox}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;