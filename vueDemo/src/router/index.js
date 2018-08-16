import Vue from 'vue'
import Router from 'vue-router'
//数据交互
import VueAxios from '../assets/lips/vue-axios/dist/vue-axios.min.js'
import Axios from '../assets/lips/axios/dist/axios.min.js'
//主页
import Sellindex from './../pages/home/sell_index.vue'

import goods from './../components/goods/goods.vue'
import ratings from './../components/ratings/ratings.vue'
import seller from './../components/seller/seller.vue'

Vue.use(Router)
export default new Router({
  linkActiveClass:'active',//默认添加一个active的class 路由自带
  routes: [  
    {
      path: '/',
      name: 'Sellindex',
      component: Sellindex,
      children:[
        {path:'',component:goods},
        {path:'goods',component:goods},
        {path:'ratings',component:ratings},
        {path:'seller',component:seller}
      ]
    },
    {
      path: '/Sellindex',
      name: 'Sellindex',
      component: Sellindex
    }                      
  ]
})
