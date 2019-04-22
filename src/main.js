import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'vue-nprogress'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import Gravatar from 'vue-gravatar'
import VueI18n from 'vue-i18n'

import snackbar from "node-snackbar"
import 'node-snackbar/dist/snackbar.min.css'
Object.defineProperty(Vue.prototype, '$snackbar', { value: snackbar });

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(Router)
Vue.use(NProgress)
Vue.use(VueTyperPlugin)
Vue.use(VueI18n)

Vue.component('v-gravatar', Gravatar);

const nprogress = new NProgress({ parent: '.nprogress-container' })

import { messages } from './internationalization'
const i18n = new VueI18n({
  locale: 'en',
  messages,
})

new Vue({
  i18n,
  nprogress,
  router: new Router({
    mode: 'history',
    // methods: { 
    //   scrollToTop() {
    //     window.scrollTo(0,0);
    //   }
    // },
    routes: [{
        name: 'index',
        path: '/',
        component: () => import('./pages/Index.vue'),
        meta: {
          layout: "normal",
          showProgressBar: true
        }
      },
      {
        name: 'pricing',
        path: '/pricing',
        component: () => import('./pages/Pricing.vue'),
        meta: {
          layout: "normal"
        }
      },
      {
        name: 'ico',
        path: '/ico',
        component: () => import('./pages/ICO.vue'),
        meta: {
          layout: "normal"
        }
      },
      {
        name: 'privacy',
        path: '/privacy-policy',
        component: () => import('./pages/PrivacyPolicy.vue'),
        meta: {
          layout: "normal"
        }
      },
      {
        name: 'explore',
        path: '/explore',
        component: () => import('./pages/Explore.vue'),
        meta: {
          layout: "normal"
        }
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('./pages/Login.vue'),
        meta: {
          layout: "normal"
        }
      },
      {
        name: 'register',
        path: '/create-account',
        component: () => import('./pages/Register.vue'),
        meta: {
          layout: "normal"
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
          layout: "normal"
        }
      },
      {
        name: 'support',
        path: '/support',
        component: () => import('./pages/Support.vue'),
      },
      {
        path: '*',
        component: () => import('./pages/Error404.vue'),
        meta: {
          layout: "normal"
        }
        // component: {
        //   render(h) { return h('div', '404. Not Found.') }
        // }
      }
    ]
  }),
  ...App
}).$mount('#app')