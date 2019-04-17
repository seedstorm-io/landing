import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'vue-nprogress'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
// import AsyncComputed from 'vue-async-computed'
// import VueResource from 'vue-resource'

Vue.config.devtools = true
Vue.config.productionTip = false

const Index = () => import('./pages/Index.vue')
const Error404 = () => import('./pages/Error404.vue')

Vue.use(Router)
Vue.use(NProgress)
Vue.use(VueTyperPlugin)
// Vue.use(AsyncComputed)
// Vue.use(VueResource)

const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
  nprogress,
  router: new Router({
    mode: 'history',
    routes: [
      {
        name: 'index',
        path: '/',
        component: Index
      },
      {
        name: 'login',
        path: '/login',
        component: Index
      },
      {
        path: '*',
        component: Error404
        // component: {
        //   render(h) { return h('div', '404. Not Found.') }
        // }
      }
    ]
  }),
  ...App
}).$mount('#app')