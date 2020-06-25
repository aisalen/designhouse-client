// 12.95
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/verification/verify/:id', name: 'verify', component: page('auth/verification/verify.vue') },
  // 13.101
  {
    path: '/verification/resend',
    name: 'verification.resend',
    component: page('auth/verification/resend.vue')
  },
  // 13.103
  {
    path: '/password/email',
    name: 'password.email',
    component: page('auth/password/reset-email.vue')
  },
  // 13.104
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: page('auth/password/password-reset.vue')
  },
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  });
}
