import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Home from '../view/Home'
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
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/info:id',
      name: 'Info',
      component: Info
    },
    {
      path: '/set:id',
      name: 'Set',
      component: Set
    }
  ]
})
