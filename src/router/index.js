import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../template/welcome/welcome'
import Homepage from '../template/homegage/homepage'
import Login from '../template/login/Login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
