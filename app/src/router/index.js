import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true },
        },
        {
            path: '/login',
            component: Login,
            meta: { show: false },
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false },
        },
        {
            path: '/search',
            component: Search,
            meta: { show: true },
            name:'search',
        },
        {
            path: '*',
            redirect: '/Home',
            meta: { show: true },
        }
    ]
})