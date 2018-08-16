// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router,store} from '@/js/public/port'
import api from '@/js/public/api'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false
Vue.prototype.$api = api
/* eslint-disable no-new */
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
