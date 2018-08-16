import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/',redirect:'/home'},
        {path: '*',redirect:'/'},
        {path: '/home',component: () => import('@/views/Home'),
            children: [
                {path: '', redirect:'/home/home_center'},
                {path: '/home/home_center',component: () => import('@/views/home_center'),},
                {path: '/home/home_pay',component: () => import('@/views/pay/pay_index'),},
                {path: '/home/home_unpay',component: () => import('@/views/unpay/home_unpay'),},
                {path: '/home/home_mine',component: () => import('@/views/my/my_index'), },
                {path: '/home/home_mine_money',component: () => import('@/views/my/my_money'),},
                {path: '/home/home_mine_msg',component: () => import('@/views/my/my_msg'),},
                {path: '/home/home_mine_betSet',component: () => import('@/views/my/my_bet')},
                {path: '/home/home_mine_msg/msg_detail',component: ()=> import('@/views/my/msg_notice_detail')},
                {path: '/home/home_mine_msg/news_detail',component: ()=> import('@/views/my/msg_news_detail')},
                {name:'tabType',path: '/home/sports_event',component: ()=> import('@/views/home_sports_event/sports_event')},
            ]
        },
      //测试refresh
      {path: '/sx',component: () => import('@/components/refresh')},
      {path: '/testdetail',component: () => import('@/views/home_ball_detail/football_detail')},
      {path: '/testconcede',component: () => import('@/components/home_ball_detail/footballConcede')},
      {path: '/testcorrect',component: () => import('@/components/home_ball_detail/footballCorrect')}

    ]
})
