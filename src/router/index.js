import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HeaderComponent from '@/components/HeaderComponent'
import Secured from '@/components/SecuredComponent'
import auth from '@/services/authentication'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {default: HelloWorld, header: HeaderComponent},
      props: {
        default: false
      }
    },

    {
      path: '/secured',
      name: 'secured',
      component: Secured,
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
