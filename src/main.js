import Vue  from  'vue'

import login from  './login.vue'

var vm = new Vue({
    el: '#app',
    data: {
        'greet': "hello world"
    },
    render: c => c(login)
})