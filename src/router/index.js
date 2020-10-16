import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeTest from '@/components/HomeTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tapbag',
      name: 'Home',
      component: Home
    },
    {
      path: '/hometest',
      name: 'HomeTest',
      component: HomeTest
    }
  ]
})
