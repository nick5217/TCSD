import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import header from '@/components/header'
import intrdc from '@/components/intrdc'
import about from '@/components/about'
import interview from '@/components/interview'
// import BaiduMap from 'vue-baidu-map'
// import  from '@/components/about'
// import BMapComponent from './components/BMapComponent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/header',
      name:'header',
      component:header
    },
    {
      path: '/intrdc',
      name: 'intrdc',
      component:intrdc
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/interview',
      name: 'interview',
      component:interview
    }

  ]
})
