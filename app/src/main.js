import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router/index'

//三级联动组件
import TypeNav from '@/components/TypeNav'


import  store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import  Carousel from '@/components/Carousel'
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel)
Vue.config.productionTip = false

new Vue({

  render: h => h(App),  
  //注册路由
  router,
  store,
}).$mount('#app')
