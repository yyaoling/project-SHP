import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

//先把VueRouter原型对象的push保存一份
let originPush =  VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
//第一个参数：告诉原来的push方法，往哪里跳转
//
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve&&reject){
        //console.log(111)
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace =  function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
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
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true },
            name:'search',
        },
        {
            path: '*',
            redirect: '/home',
            meta: { show: true },
        }
    ]
})