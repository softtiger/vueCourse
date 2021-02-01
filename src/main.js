import Vue from 'vue'
import App from './components/App.vue'

import router from './components/router.js'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

var vm = new Vue({
  el:"#app",
  render: h => h(App),
  router
})
