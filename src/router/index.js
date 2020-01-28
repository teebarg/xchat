import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Authentication from '../views/auth/Authentication'
import Register from '../views/auth/Register'
import Login from '../views/auth/Login'
import NotFound from '../components/shared/not-found'
import { CookieService } from '../services/cookieService'
import { CookieName } from '../helpers/constants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/chat/Dashboard.vue'),
    beforeEnter: routeGuard
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
    beforeEnter: routeGuard
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Authentication.vue'),
    beforeEnter: AuthGuard,
    children: [
      {
        path: '',
        redirect: 'login'
      },
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      }
    ]
  },
  {
    // will match everything
    path: '*',
    component: NotFound
  }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

function routeGuard (to, from, next) {
  const allow = CookieService.get(CookieName.TOKEN)
  if (allow) {
    next()
  } else {
    next({
      path: '/auth',
      query: { redirectTo: to.fullPath }
    })
  }
}

function AuthGuard (to, from, next) {
  const allow = CookieService.get(CookieName.TOKEN)
  if (!allow) {
    next()
  } else {
    next({
      path: '/'
    })
  }
}

export default router
