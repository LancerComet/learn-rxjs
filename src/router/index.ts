import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../page/home/index.vue')
    },

    {
      name: 'pub',
      path: '/pub',
      component: () => import('../page/pub/index.vue')
    },

    {
      name: 'hero',
      path: '/hero/:heroName',
      component: () => import('../page/hero/index.vue')
    }
  ]
})

export {
  router
}
