import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Json from '@/components/Json'
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
      path: '/json',
      name: 'Json',
      component: Json
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