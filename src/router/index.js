import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginComponent from '@/components/LoginComponent'
import Secured from '@/components/SecuredComponent'
import auth from '@/services/authentication'
import DefaultHeaderComponent from '@/components/DefaultHeaderComponent'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {default: HelloWorld, headerContent: LoginComponent}
    },

    {
      path: '/secured',
      name: 'secured',
      components: {default: Secured, headerContent: DefaultHeaderComponent},
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isLoggedIn()) {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
