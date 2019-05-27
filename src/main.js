import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'vue-nprogress'
import App from './App'
import VueTyperPlugin from 'vue-typer'
import Gravatar from 'vue-gravatar'
import VueI18n from 'vue-i18n'
import VueMarkdown from 'vue-markdown'

import snackbar from "node-snackbar"
import 'node-snackbar/dist/snackbar.min.css'

Object.defineProperty(Vue.prototype, '$snackbar', { value: snackbar });

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(Router)
Vue.use(NProgress)
Vue.use(VueTyperPlugin)
Vue.use(VueMarkdown)
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
    routes: [{
        name: 'index',
        path: '/',
        component: () => import('./pages/Index'),
        meta: {
          title: "Blockchain Hosting Platform",
          layout: "normal",
          showProgressBar: true
        }
      },
      {
        name: 'pricing',
        path: '/pricing',
        component: () => import('./pages/Pricing'),
        meta: {
          layout: "normal",
          title: "Our Pricing"
        }
      },
      {
        name: 'ico',
        path: '/ico',
        component: () => import('./pages/ICO'),
        meta: {
          layout: "normal",
          title: "Initial Coin Offering"
        }
      },
      {
        name: 'privacy',
        path: '/privacy-policy',
        component: () => import('./pages/PrivacyPolicy'),
        meta: {
          layout: "normal",
          title: "Privacy Policy"
        }
      },
      {
        name: 'explore',
        path: '/explore',
        component: () => import('./pages/Explore'),
        meta: {
          layout: "normal",
          title: "Explore our Blockchain Nodes"
        }
      },
      {
        name: 'explore-node',
        path: '/explore/:id',
        component: () => import('./pages/ExploreNode'),
        meta: {
          layout: "normal",
          title: "Explore our Blockchain Nodes"
        }
      },
      {
        name: 'deploy-node',
        path: '/deploy/:id',
        component: () => import('./pages/DeployNode'),
        meta: {
          layout: "normal",
          title: "Deploy Node",
        }
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('./pages/Login'),
        meta: {
          layout: "normal",
          title: "Sign in Account"
        }
      },
      {
        name: 'register',
        path: '/create-account',
        component: () => import('./pages/Register'),
        meta: {
          layout: "normal",
          title: "Create an Account"
        }
      },
      {
        name: 'logout',
        path: '/logout',
        component: () => import('./pages/Logout'),
      },
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('./pages/Dashboard'),
        meta: {
          layout: "normal"
        }
      },
      {
        name: 'support',
        path: '/support',
        component: () => import('./pages/Support'),
        meta: {
          title: "Get Support",
        }
      },
      {
        path: '*',
        component: () => import('./pages/Error404'),
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