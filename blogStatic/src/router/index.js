import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      component:()=>import('@/views/index'),
      children:[
        {
          path: '',
         redirect:'/index/home'
        },
        {
          path: '/index/home',
          component:()=>import('@/views/home')
        },
        {
          path: '/index/study',
          component:()=>import('@/views/study')
        },
        {
          path: '/index/arcontent',
          name:'arcontent',
          component:()=>import('@/views/arcontent')
        }
        
      ]
    }
  ]
})
