import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Index from '../view/Index'
import Info from '../view/Info'
import Set from '../view/Set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/info:id',
      name: 'Info',
      component: Info
    },
    {
      path: '/set:id',
      name: 'set',
      component: Set
    }
  ]
})
