
<!--这块是介绍上海分公司的-->
<template>
  <body>
  <my-header></my-header>

  <!--轮播图-->
  <div id="roll">
    <el-carousel height="400px" type="card" style="outline: none">
      <el-carousel-item v-for="item in img1" :key="item">
        <img :src="item.url" height="100%" width="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
  <hr>
  <!--轮播图-->

<!--菜单栏模块-->
  <el-tabs :tab-position="tabPosition" style="height: 2000px;" type="card">
    <el-tab-pane label="公司介绍"><pre>
                                中国邮政速递物流股份有限公司上海市分公司简介

            中国邮政速递物流股份有限公司上海市分公司隶属于中国邮政速递物流股份有限公司，拥有
      EMS特快专递和CNPL中邮物流两大专业品牌，于2010年正式独立运行，现有员工6000多人。

            中国邮政速递物流股份有限公司上海市分公司专业经营国内、国际速递、合同物流等业务，
      国内、国际速递服务涵盖卓越、标准和经济不同时限水平和代收货款等增值服务，合同物流涵盖
      仓储、运输等供应链全过程。公司依托和发挥中国邮政“两网三流”的资源优势和“百年邮政”
      的良好信誉，坚持“至诚至信，精益求精”的经营理念，坚持“珍惜每一刻，用心每一步”的服
      务理念，为社会各界客户提供方便快捷、安全可靠的门到门速递物流服务，致力于成为持续引领
      中国市场、综合服务能力最强、最具全球竞争力和国际化发展空间的大型现代快递物流企业。采
      用先进速递物流运作模式和技术手段，努力为客户提供个性化、量体裁衣的各类完善的速递物流
      解决方案。

             EMS业务，是伴随着我国改革开放和经济发展而迅速成长起来的，追求时限、速度和效率的
      快递服务。最早开办了国际、国内特快专递业务。近年来，为不断适应和满足市场需求，相继推
      出了卓越、标准和经济三大类服务产品。打造了“次晨达”、“次日递”、“限时递”等高端承
      诺服务业务，率先创办了国内特快专递代收货款业务，推出了收件人付费、鲜花礼仪速递等增值
      业务，以及电子商务速递和经济快递业务。并于2016年1月1日，推出同城当日递业务，承诺上午
      12:00前寄递，下午18:00前到达的高时限标准的寄递服务。

             物流业务，围绕精益物流服务，确立了合同物流、中邮快货和功能性物流等三大主要产品。
      采用先进物流运作模式和技术手段，努力为客户提供个性化、量体裁衣的各类完善的物流解决方
      案，提供基于供应链管理的，包括仓储、封装、配送、加工、理货、运输和信息服务于一体的综
      合物流服务。



    </pre>
    </el-tab-pane>
    <!--站点分布模块-->
    <el-tab-pane label="站点分布">
      <baidu-map class="bm-view"
                 :center="{
                  lng:121.203056,lat:31.373296}"
                 :zoom="12"
                 :scroll-wheel-zoom="true"
                 style="height: 600px">

        <bm-marker :position="{lng: 121.462991,lat:31.259954}" title="不夜城商务圈投揽部:沪太路129号4楼"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng:121.510596,lat:31.261789}" title="北外滩商务圈投揽部:公平路462号"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng: 121.464345,lat:31.1781}" title="徐汇商务圈投揽部:云锦路187号"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng: 121.497663,lat:31.214969}" title="外滩商务圈投揽部:南车站路182路"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng: 121.412094,lat:31.229262}" title="长风商务圈投揽部:中山北路3663号"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng: 121.405249,lat:31.165893}" title="漕河泾商务圈投揽部:古美路1487弄17座1楼"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng: 121.498295,lat:31.349751}" title="五角场商务圈投揽部:淞南路345号2楼"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng: 121.416371,lat:31.234767}" title="虹桥商务圈投揽部:中山北路3617号2楼"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng:121.594305,lat:31.211182}" title="张江高科技商务圈投揽部:中山北路3617号2楼 "
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-marker :position="{lng: 121.56204,lat:31.230854}" title="陆家嘴商务圈投揽部:迎春路879号"
                   animation="BMAP_ANIMATION_BOUNCE"></bm-marker>

      </baidu-map>
    </el-tab-pane>

    <!--联系方式模块-->
    <el-tab-pane label=" 联系我们">
      <div id="intr" style="display: inline;width: 600px">
        <el-card class="box-card">
          <img src="../assets/上海邮政微信.png" width="556" style="padding-left: 200px"/><br>
          <pre>
            Tel:  021-56986113

          用户通过“上海邮政速递物流”公众号和“快递e哥”APP内即时端口实时下单，实时完成支付费用。<br>

          用户可通过下单账户，实时追踪邮件物流信息。


        </pre>
        </el-card>
        <el-card class="box-card">
          <img src="../assets/EMS二维码.jpg" width="400px" style="margin-right: 30px"/>
          <div style="display: inline-block;border: solid rgba(163,163,163,0.35) 2px;height:430px;width: 500px ">
            <pre style="font-family: '微软雅黑 Light';font-size:20px;padding-top: 90px;  margin-left: 20px;">
            <!--Tel:021-56986113//e哥电话-->

              Tel：（021）63936666


              E-mail： webmaster@shpost.com.cn
            </pre>
          </div>
        </el-card>
      </div>

    </el-tab-pane>

    <el-tab-pane label="发送反馈"><pre style="margin-left: 60px">
      <span style="font-size: larger">帮助我们做得更好！</span>

      您的邮箱：
      <input type="text"><br>
      想说的话:
      <textarea style="height: 200px;width: 500px"></textarea>
      <el-button round plain style="outline: none" onclick="alert('感谢您的宝贵意见')">发送反馈</el-button>
    </pre>

    </el-tab-pane>
  </el-tabs>
  <my-footer></my-footer>
  </body>
</template>
<script>
  // import BMapComponent from './components/BMapComponent'
  //  import ElMenuItem from "../../node_modules/element-ui/packages/menu/src/menu-item.vue";
  import ElementUI from 'element-ui'

  export default {
//    components: {ElMenuItem},
    data() {
      return {
        activeIndex: '3',
        activeIndex2: '3',
        tabPosition: 'left',
        type: 'card',
        //轮播图照片
        img1: [{url: require('../assets/ems图片1.jpeg')},
          {url: require('../assets/ems图片2.jpg')},
          {url: require('../assets/快递e哥启动仪式/快递E哥产品启动仪式02.jpg')},
          {url: require('../assets/快递e哥启动仪式/快递E哥产品启动仪式03.jpg')},
          {url: require('../assets/快递e哥启动仪式/快递E哥产品启动仪式04.jpg')}
        ]

      }
    }

  };

</script>
<style>
  img {
    display: inline-block;

  }

  <!--
  百度地图设置-- >
  .bm-view {
    width: 100%;
    height: 600px;
  }

  #hd {
    margin-top: 40px;

  }

  .el-menu-item {
    text-decoration: none;
  }

  .router-link {

    text-decoration: none;

  }

  body {
    width: 1200px;
    /*border: black solid;*/
    margin: 0 auto;
    height: 3000px;
  }

  #allmap {
    height: 800px;
    width: 1000px;

  }

  pre {
    font-size: large;
    font-family: 微软雅黑;
    line-height: 30px;
    margin-left: 100px;
  }
</style>
