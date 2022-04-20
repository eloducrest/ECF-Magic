import Vue from 'vue'
import App from './App.vue'
import router from './router'

//axios
import axios from 'axios'
Vue.use(axios);
window.axios = require('axios');

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// scss
import './scss/home.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
