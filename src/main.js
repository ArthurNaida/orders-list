import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'
import TLogin from '@/components/views/TLogin.vue'
import TOrders from '@/components/views/TOrders.vue'

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.use(VueRouter)

const routes = [
  {path: '/auth', component: TLogin, alias: '/'},
  {path: '/orders', component: TOrders},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
