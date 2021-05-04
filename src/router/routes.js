import Home from '@/views/Home'
import Login from '@/views/Login'
import FindPass from '@/views/Login/components/FindPass'
import Statistics from '@/components/Statistics'
import UserInfo from '@/components/UserInfo'
import AddGoods from '@/components/Goods/AddGoods.vue'
import GoodsList from '@/components/Goods/GoodsList.vue'
import GoodsManage from '@/components/Goods/GoodsManage.vue'
export default [
    {
        path: '/',
        redirect: {
            path: 'Home'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: {
            name: 'Statistics'
        },
        meta: {
            navItem: '首页'
        },
        children: [
            { path: '/home/userInfo', component: UserInfo, name: "UserInfo", meta: { navItem: "个人中心" } },
            { path: '/home/statistics', component: Statistics, name: "Statistics", meta: { navItem: "统计" } },
        ]
    },
    {
        path: '/goods',
        name: 'Home',
        component: Home,
        redirect: {
            name: 'GoodsList'
        },
        meta: {
            navItem: '商品'
        },
        children: [
            { path: '/goods/add', component: AddGoods, name: "AddGoods", meta: { navItem: "添加商品" } },
            { path: '/goods/list', component: GoodsList, name: "GoodsList", meta: { navItem: "商品列表" } },
            { path: '/goods/manage', component: GoodsManage, name: "GoodsManage", meta: { navItem: "类目管理", canHidden: true } },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/findPass',
        name: 'FindPass',
        component: FindPass,
    }
]
