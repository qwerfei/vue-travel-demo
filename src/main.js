// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'    //移动端300ms点击使事件延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'    // 部分浏览器不支持es6语法处理
import store from './store/index.js'  //vuex导入
import 'styles/reset.css'
import 'styles/border.css'    //1px像素边框
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
// global.API_PROXY = 'https://bird.ioliu.cn/v1/?url=' // 线上代理地址
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
