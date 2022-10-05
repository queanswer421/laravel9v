import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './views/Start.vue'


import store from './store.js';

Vue.use(Router)

store.dispatch('autologin');

const authGuard = (to, from, next) => {
  if(store.getters.isAuth) {
    next();
  } else {
    next({name: 'login'});
  }
};

const notAuthGuard = (to, from, next) => {
  if(!store.getters.isAuth) {
    next();
  } else {
    next({name: 'protected'});
  }
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'start',
        component: Start
    },
    {
        path: '/administrator',
        // name: 'administrator',
        component: () => import('./administrator/Administrator.vue'),
        children: [
            {
                path: '/',
                name: 'administrator.home',
                component: () => import('./administrator/Home.vue'),
            },
            {
                path: '/loginA',
                name: 'administrator.login',
                component: () => import('./administrator/Login.vue'),
            },
            {
                path: '/registerA',
                name: 'administrator.register',
                component: () => import('./administrator/Register.vue'),
            },
            {
                path: '/protectedA',
                name: 'administrator.protected',
                component: () => import('./administrator/Protected.vue'),
            },
        ]
    },
    {
        path: '/company',
        // name: 'company',
        component: () => import('./company/Company.vue'),
        children: [
            {
                path: '/company',
                // name: 'company.home',
                component: () => import('./company/Home.vue'),
            },
            {
                path: '/company/login',
                // name: 'company.login',
                component: () => import('./company/Login.vue'),
            },
            {
                path: '/company/register',
                // name: 'company.register',
                component: () => import('./company/Register.vue'),
            },
            {
                path: '/company/protected',
                // name: 'company.protected',
                component: () => import('./company/Protected.vue'),
            },
        ]
    },
    {
        path: '/employer',
        // name: 'employer',
        redirect: 'employer.home',
        component: () => import('./employer/Employer.vue'),
        children: [
            {
                path: '/employer',
                // name: 'employer.home',
                component: () => import('./employer/Home.vue'),
            },
            {
                path: '/employer/login',
                // name: 'employer.login',
                component: () => import('./employer/Login.vue'),
            },
            {
                path: '/employer/register',
                // name: 'employer.register',
                component: () => import('./employer/Register.vue'),
            },
            {
                path: '/employer/protected',
                // name: 'employer.protected',
                component: () => import('./employer/Protected.vue'),
            },
        ]
    },


    // {
    // path: '/employer',
    // component: Employer,
    // children: [
    //     {
    //         path: '/',
    //         name: 'home',
    //         component: Home
    //       },
    //       {
    //         path: '/register',
    //         name: 'register',
    //         component: () => import('./views/Register.vue'),
    //         beforeEnter: notAuthGuard
    //       },
    //       {
    //         path: '/login',
    //         name: 'login',
    //         component: () => import('./views/Login.vue'),
    //         beforeEnter: notAuthGuard
    //       },
    //       {
    //         path: '/protected',
    //         name: 'protected',
    //         component: () => import('./views/Protected.vue'),
    //         beforeEnter: authGuard
    //       }
    //     ]
    // }
    ]
})
