// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import wx from 'weixin-js-sdk'
import '../static/js/wxjsdk.js'
import '../static/js/public.js'
import '../static/style/animate.min.css'
import '../static/style/style.css'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
