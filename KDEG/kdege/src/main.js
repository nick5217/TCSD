// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import  'jquery'
import '../theme/index.css'

// import BaiduMap from 'vue-baidu-map'
// import 'element-ui/lib/theme-chalk/index.css'
// import "assets/jqueryLbt/scripts/carousel.js"
// import "assets/jqueryLbt/scripts/jquery.min.js"
// import "assets/jqueryLbt/css/style.css"
import $ from 'jquery'
// import jQuery from 'jquery'
Vue.component('my-footer',
  {
    template: '<div style="width: 100%;position: fixed;bottom: 0px;height: 40px;background-color: white;line-height: 40px;z-index: 20">' +

    '<strong>"快递E哥"即时平台</strong>' +
    '&nbsp;&nbsp;&nbsp;Tel:56986113   E-mail:emskdge@163.com' +

    '&nbsp;&nbsp;&nbsp;<strong>上海邮政速递物流</strong>' +
    '&nbsp;&nbsp;&nbsp;Tel:（021）63936666   E-mail:webmaster@shpost.com.cn' +
    '</div>'


  }
)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'kQlPNojGEe6lIWbrdkx65izorYEIaVTC'
})
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
