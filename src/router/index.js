import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/welcome/welcome'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    }
  ]
})
