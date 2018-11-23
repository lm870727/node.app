import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 懒加载模块
import VueLazyload from 'vue-lazyload'

// 懒加载的配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 当图片请求失败的时候就会用 error 里面的地址替换原图
  error: require('../static/images/touxiang.jpg'),
  // 正在请求的时候加载的图片
  loading: require('../static/images/loading.gif'),
  attempt: 1
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
