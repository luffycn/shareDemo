// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
/*
let app = Vue.extend(app);
var myRouter = new router();
myRouter.map({
	'./goods':{
		component:goods
	},
	'./seller':{
		component:seller
	},
	'./ratings':{
		component:ratings
	}	
})
myRouter.start(app,'#app');*/
