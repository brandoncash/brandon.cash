import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/work',
      component: () => import(/* webpackChunkName: "work" */ './views/Work.vue'),
      children: [
        {
          path: '',
          name: 'work',
          component: () => import(/* webpackChunkName: "work-main" */ './views/work/Main.vue'),
        },
        {
          path: 'take-or-treat',
          name: 'take-or-treat',
          component: () => import(/* webpackChunkName: "work-take-or-treat" */ './views/work/TakeOrTreat.vue'),
        },
        {
          path: 'settle-your-score',
          name: 'settle-your-score',
          component: () => import(/* webpackChunkName: "work-settle-your-score" */ './views/work/SettleYourScore.vue'),
        },
      ],
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import(/* webpackChunkName: "skills" */ './views/Skills.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      window.scrollTo({ top: savedPosition.x, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
});
