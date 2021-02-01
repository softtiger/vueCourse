import Account from './Account.vue'

import Goods from './Goods.vue'

import VueRouter from 'vue-router'

var router = new VueRouter({
    routes:[
      {'path':'/goods',component:Goods},
      {'path':'/account',component:Account},
    ]

})

export default router