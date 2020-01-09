import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MainUI.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/picture',
    name: 'picture',
    meta: {
      title: '拍照',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Picture.vue')
  },
  {
    path: '/navigation',
    name: 'navigation',
    meta: {
      title: '导航栏',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Navigation.vue')
  },
  {
    path: '/smsmsg',
    name: 'smsmsg',
    component: () => import(/* webpackChunkName: "about" */ '../views/Smsmsg.vue'),
    meta: {
      title: '电话',
    }
  },
  {
    path: '/voice',
    name: 'voice',
    component: () => import(/* webpackChunkName: "about" */ '../views/Voice.vue'),
    meta: {
      title: '音频',
    }
  },
  {
    path: '/localstorage',
    name: 'localstorage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Localstorage.vue'),
    meta: {
      title: '数据缓存',
    }
  },
  {
    path: '/openactivity',
    name: 'openactivity',
    component: () => import(/* webpackChunkName: "about" */ '../views/OpenActivity.vue'),
    meta: {
      title: '打开第三方应用',
    }
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('../views/Dialog.vue'),
    meta: {
      title: '弹窗示范',
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
