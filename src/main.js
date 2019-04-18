import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'vue-nprogress'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'

import snackbar from "node-snackbar"
import 'node-snackbar/dist/snackbar.min.css'
Object.defineProperty(Vue.prototype, '$snackbar', { value: snackbar });

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(Router)
Vue.use(NProgress)
Vue.use(VueTyperPlugin)

const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
  nprogress,
  router: new Router({
    mode: 'history',
    routes: [{
        name: 'index',
        path: '/',
        component: () => import('./pages/Index.vue'),
        meta: {
          mode: "normal",
          showProgressBar: true
        }
      },
      {
        name: 'explore',
        path: '/explore',
        component: () => import('./pages/Explore.vue'),
        meta: {
          mode: "normal"
        }
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('./pages/Login.vue'),
        meta: {
          mode: "normal"
        }
      },
      {
        name: 'register',
        path: '/create-account',
        component: () => import('./pages/Register.vue'),
        meta: {
          mode: "normal"
        }
      },
      {
        name: 'logout',
        path: '/logout',
        component: () => import('./pages/Logout.vue'),
      },
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('./pages/Dashboard.vue'),
        meta: {
          mode: "normal"
        }
      },
      {
        path: '*',
        component: () => import('./pages/Error404.vue'),
        meta: {
          mode: "normal"
        }
        // component: {
        //   render(h) { return h('div', '404. Not Found.') }
        // }
      }
    ]
  }),
  ...App
}).$mount('#app')