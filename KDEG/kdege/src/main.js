// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import '../theme/index.css'


// import BaiduMap from 'vue-baidu-map'
// import 'element-ui/lib/theme-chalk/index.css'
// import "assets/jqueryLbt/scripts/carousel.js"
// import "assets/jqueryLbt/scripts/jquery.min.js"
// import "assets/jqueryLbt/css/style.css"
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
Vue.component('my-header', {
  template: ' <div class="all" style="z-index: -10;">\n' +
  '    <div id="hd" style="align-content: center;">\n' +
  '      <!--&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-->\n' +
  '      <!--&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-->\n' +
  '      <!--<img src="../assets/横板Logo（小）.png" width="30%" height="30%"/>-->\n' +
  '      <!--<span-->\n' +
  '      <!--style="font-style: italic;font-size: 40px;;display: inline-block;;margin-bottom: 10px"><strong>新时代即时递寄递平台</strong>-->\n' +
  '      <!--</span>-->\n' +
  '      <img src="../static/新logo.png" width="100%"/>\n' +
  '<hr style="background-color:#07478e;height: 3px;margin-bottom: 0px" />\n' +
  '    </div>\n' +
  '\n' +
  '    <el-menu :default-active="activeIndex2"\n' +
  '             class="el-menu-demo"\n' +
  '             mode="horizontal"\n' +
  '             @select="handleSelect"\n' +
  '             background-color=""\n' +
  '             text-color="black"\n' +
  '             active-text-color="#f9872a"\n' +
  '             style="margin-bottom: 0px">\n' +
  '      <el-menu-item index="1"> <router-link to="/" style="text-decoration: none;color: black">首页</router-link></el-menu-item>\n' +
  '      <el-menu-item index="2">\n' +
  '        <router-link to="/intrdc" style="text-decoration: none;color: black">产品介绍</router-link>\n' +
  '      </el-menu-item>\n' +
  '      <el-menu-item index="3">\n' +
  '          <router-link to="/about" style="text-decoration: none;color: black">关于我们</router-link>\n' +
  '      </el-menu-item>\n' +
  '      <el-menu-item index="4">\n' +
  '        <router-link to="/interview" style="text-decoration: none;color: black">E哥招募</router-link>\n' +
  '      </el-menu-item>\n' +
  '      <el-menu-item index="5"><a href="http://www.ems.com.cn/" style="text-decoration: none">EMS</a>\n' +
  '      </el-menu-item>\n' +
  '    </el-menu>\n' +
  '    <!--<nav>-->\n' +
  '    <!--<li><strong>首页</strong></li>-->\n' +
  '    <!--<li style="background-color: #fc6a15"><strong>平台介绍</strong></li>-->\n' +
  '    <!--<li><strong>特色产品</strong></li>-->\n' +
  '    <!--<li><strong>联系我们</strong></li>-->\n' +
  '    <!--<li style="width: 200px;height:44px;background-color: white;border: #f9872a solid"><img-->\n' +
  '    <!--src="../assets/emslogo.jpg" height="44px"/>-->\n' +
  '    <!--</li>-->\n' +
  '    <!--</nav>-->\n' +
  '  </div>'


})

//站点模块用到的组件
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'kQlPNojGEe6lIWbrdkx65izorYEIaVTC'
})

Vue.use(ElementUI)//element ui 用到的
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
