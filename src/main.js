import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.config.devtools = true
Vue.config.productionTip = false

const Index = () => import('./pages/Index.vue')
const Error404 = () => import('./pages/Error404.vue')

Vue.use(Router)

new Vue({
  router: new Router({
    mode: 'history',
    routes: [
      {
        name: 'index',
        path: '/',
        component: Index
      },
      {
        name: 'example',
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