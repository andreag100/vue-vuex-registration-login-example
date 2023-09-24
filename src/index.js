import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { router } from './_helpers';
import App from './app/App';

Vue.use(VeeValidate);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

{
    path: '/login',
    name: 'Login',
    component: () => import('@/components/LoginPage.vue')
  }
  