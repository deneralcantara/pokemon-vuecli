import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import 'bootstrap'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/sass/main.scss'

/* vuex */
import { store }  from './store/store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
