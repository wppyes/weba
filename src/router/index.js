import Vue from 'vue'
import Router from 'vue-router'
import tintone from '@/components/Hello'
import pinpai from '@/components/pinpaianquan'
import weixin from '@/components/weixin'
import fuwu from '@/components/fuwu'
import quanjing from '@/components/quanjing'
import detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	},
  routes: [
    {
      path: '/',
      name: 'tintone',
      component: tintone
    },    
    {
      path: '/case',
      name: 'pinpai',
      component: pinpai
    },    
    {
      path: '/yunying',
      name: 'weixin',
      component: weixin
    },    
    {
      path: '/yunfuwu',
      name: 'fuwu',
      component: fuwu
    },    
    {
      path: '/quanjing',
      name: 'quanjing',
      component: quanjing
    },    
    {
      path: '/Hello',
      name: 'detail',
      component: detail
    }
  ]
})