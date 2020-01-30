import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import Layouts from './views/Layouts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
   routes: [
    {
      path: '/home',
      name: 'home',
      meta: { layout: 'LayoutLogin'},
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: 'Layout1'},
      component: Dashboard
    },
    {
      path: '/',
      name: 'root',
      meta: { layout: 'LayoutLogin'},
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'LayoutLogin'},
      component: Login
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/layouts',
      name: 'layouts',
      meta: { layout: 'Layout' },
      component: Layouts
    }

  ]
})
