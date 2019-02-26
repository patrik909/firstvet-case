import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import JsonResult from '@/components/JsonResult'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/JsonResult/:id',
      name: 'JsonResult',
      component: JsonResult
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})