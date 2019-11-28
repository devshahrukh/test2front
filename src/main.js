import Vue from 'vue'
import './style.scss'
import Buefy from 'buefy'
import App from './App.vue'
import store from './store'
import router from './router'

import apiService from '@/services/apiService';

Vue.config.productionTip = false

Vue.use(Buefy)
apiService.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
