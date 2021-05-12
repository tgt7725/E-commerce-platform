import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import {whoAmI} from '@/api/loginUser.js'
Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   }
// ]

const router = new VueRouter({
  mode: 'hash',
  routes
});

// 路由守卫，判断是否有权限
router.beforeEach(async (to, from, next) => {
  if(to.name !== 'Login' && to.name !== 'FindPass') {
    const user = whoAmI();
    if(!user) {
      next('/login');
    }
    else if(to.name === 'GoodsManage') {
      if(user.role !== 'admin') {
        alert('非管理员身份不能进行商品类目管理');
        next(from.path);
      }else {
        next();
      }
    }
    else {
      next();
    }
  }else {
    next();
  }
})
export default router
