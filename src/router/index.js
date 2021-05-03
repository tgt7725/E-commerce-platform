import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import {whoAmI} from '@/api/user.js'
Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由守卫，判断是否有权限
router.beforeEach((to, from, next) => {
  if(to.name !== 'Login') {
    const user = whoAmI();
    if(!user) {
      next('/login');
    }else {
      next();
    }
  }else {
    next();
  }
})

export default router
