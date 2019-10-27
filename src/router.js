import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import List from '@/views/List'
import SelfInfo from '@/views/SelfInfo'
import GoodDetail from '@/views/GoodDetail'
import Publish from '@/views/Publish'
import Login from '@/views/Login'
import Information from '@/views/Information'
import Register from '@/views/Register'
import testRegister from '@/views/testRegister'
import CheckLogin from '@/views/CheckLogin'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
     {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path: '/list',
      name: 'List',
      component: List,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path: '/selfinfo',
      name: 'SelfInfo',
      component: SelfInfo
    },{
      path: '/gooddetail',
      name: 'GoodDetail',
      component: GoodDetail,
      meta: {
        keepAlive: false //不需要被缓存
      }
    },{
      path: '/publish',
      name: 'Publish',
      component: Publish
    },{
      path: '/information',
      name: 'information',
      component: Information
    },{
      path: '/register',
      name: 'register',
      component: Register
    },{
      path: '/testregist',
      name: 'testregister',
      component: testRegister
    },{
      path: '/checklogin',
      name: 'checklogin',
      component: CheckLogin
    }
  ]
})
