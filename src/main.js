import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { NavBar } from 'vant';
Vue.use(NavBar);

import {hesc} from 'hesc-jsapi'
Vue.prototype.$hesc = hesc

import httputils from './assets/js/HttpUtils'
Vue.prototype.$httputils = httputils

import { Uploader } from 'vant';
Vue.use(Uploader);

import vConsole from '@/assets/js/vconsole.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
