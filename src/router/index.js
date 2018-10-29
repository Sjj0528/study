import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Register from '@/components/register'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
