<template>
  <body>

  <div class="all" style="z-index: -10">
    <div id="hd" style="align-content: center">
      <!--&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-->
      <!--&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-->
      <!--<img src="../assets/横板Logo（小）.png" width="30%" height="30%"/>-->
      <!--<span-->
      <!--style="font-style: italic;font-size: 40px;;display: inline-block;;margin-bottom: 10px"><strong>新时代即时递寄递平台</strong>-->
      <!--</span>-->
      <img src="../assets/新logo.png" width="100%"/>
    </div>

    <el-menu :default-active="activeIndex2"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color=""
             text-color="black"
             active-text-color="#f9872a"
             style="margin-bottom: 20px">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <router-link to="/intrdc" style="text-decoration: none;color: black">产品介绍</router-link>
        </template>
        <el-menu-item index="2-1">E速达</el-menu-item>
        <el-menu-item index="2-2">定制配</el-menu-item>
        <el-menu-item index="2-3">E直达</el-menu-item>
        <el-menu-item index="2-4">第三方</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <router-link to="/about" style="text-decoration: none;color: black">关于我们</router-link>
        </template>
        <el-menu-item index="3-1">
          公司介绍
        </el-menu-item>
        <el-menu-item index="3-2">
          联系我们
        </el-menu-item>
        <el-menu-item index="3-3">
          站点分布
        </el-menu-item>

        <el-menu-item index="3-4">第三方</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <router-link to="/interview" style="text-decoration: none;color: black">E哥招募</router-link>
      </el-menu-item>
      <el-menu-item index="5"><a href="http://www.ems.com.cn/" style="text-decoration: none">EMS</a>
      </el-menu-item>
    </el-menu>
    <!--<nav>-->
    <!--<li><strong>首页</strong></li>-->
    <!--<li style="background-color: #fc6a15"><strong>平台介绍</strong></li>-->
    <!--<li><strong>特色产品</strong></li>-->
    <!--<li><strong>联系我们</strong></li>-->
    <!--<li style="width: 200px;height:44px;background-color: white;border: #f9872a solid"><img-->
    <!--src="../assets/emslogo.jpg" height="44px"/>-->
    <!--</li>-->
    <!--</nav>-->
  </div>

  <!--<div id="roll">-->
  <!--<el-carousel height="800px">-->
  <!--<el-carousel-item v-for="item in img1" :key="item">-->
  <!--<img :src="item.url" height="100%" width="100%">-->
  <!--</el-carousel-item>-->
  <!--</el-carousel>-->
  <!--</div>-->

  <div style="; width:100%;height:100%;margin:0px;position: relative ">
    <img src="../assets/首页.png" width="100%"/>
    <el-button type="warning" style="position: absolute;left: 46.2%" onclick="window.open('http://admin.ksudi.com')">
      E键下单
    </el-button>
    <el-button type="warning"
               style="outline: none;position: absolute;top:3790px;left: 7%;color: white;text-decoration: none">
      <router-link to="/interview" style="color: white;text-decoration: none">加入我们</router-link>
    </el-button>
    <video src="../assets/宣传视频.mp4" width="40%" controls="controls"></video>
    <div id="guess" style="vertical-align: center">
      &nbsp&nbsp
      &nbsp&nbsp
      &nbsp&nbsp
      &nbsp&nbsp
      寄件地址:&nbsp&nbsp
      <el-input placeholder="请输入地址" style="width: 20%"></el-input>
      &nbsp&nbsp 收件地址:&nbsp&nbsp;<el-input placeholder="请输入地址" style="width: 20%"></el-input>
      <!--<br><br>-->
      <!--&nbsp&nbsp&nbsp&nbsp-->
      &nbsp&nbsp
      &nbsp&nbsp
      <el-dropdown>
        <el-button type="primary">
          选择产品<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>E速达</el-dropdown-item>
          <el-dropdown-item>定制配</el-dropdown-item>
          <el-dropdown-item>E直达</el-dropdown-item>
          <el-dropdown-item>第三方</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <br><br>
      <center>
        <button class="btn btn-success btn-lg"
                style="outline: none;vertical-align: center"
                onclick="s1()">预估邮费
        </button>
        <br>
        <div id="t1">
          <el-alert
            title="您的邮费为 15 元"
            type="success"
            center
            show-icon
          >
          </el-alert>
        </div>
      </center>

    </div>

  </div>
  <script type="application/javascript">
    // import $ from 'jquery'

    function s1() {
      var tx1 = document.getElementById("t1");
      tx1.style.display = "block";
    }

    //
    // function open1() {
    //   this.$alert('这是一段内容', '标题名称', {
    //     confirmButtonText: '确定',
    //     callback: action => {
    //       this.$message({
    //         type: 'info',
    //         message: `action: ${ action }`
    //       });
    //     }
    //   });
    // }

  </script>
  <my-footer></my-footer>
  </body>

</template>

<script type="application/javascript">


  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        // img1: [{url: require('../assets/快递e哥启动仪式/何放-陈斌合影（20171101）.jpg')},
        //   {url: require('../assets/快递e哥启动仪式/快递E哥产品启动仪式01.jpg')},
        //   {url: require('../assets/快递e哥启动仪式/快递E哥产品启动仪式02.jpg')},
        //   {url: require('../assets/快递e哥启动仪式/快递E哥产品启动仪式03.jpg')},
        //   {url: require('../assets/快递e哥启动仪式/快递E哥产品启动仪式04.jpg')}
        // ]
      }
      methods: {
        open1()
        {
          this.$alert('您的邮费为15元', '尊敬的用户', {
            confirmButtonText: 'OK',

          });


          // }
          // open2()
          // {
          //   this.$message({
          //     message: '恭喜你，这是一条成功消息',
          //     type: 'success'
          //   });
          // }

        }
      }


    }
  }

</script>

<style>
  .el-button {
    z-index: 20;
    /*position: absolute;*/
    /*!*left: 47%;*!*/
    top: 380px;
    /*margin: 0 auto;*/
    /*outline: none;*/
    /*border: none;*/
    /*border-color: transparent;*/
  }

  .el-button:focus {
    outline: none;
    border: none;
    border-color: transparent;
  }

  video {
    z-index: 10;
    position: absolute;
    top: 3450px;
    left: 55%;

  }

  .el-menu-item {
    text-decoration: none;
  }

  .router-link {

    text-decoration: none;

  }

  .sub {
    position: absolute;
    left: 50%;
    z-index: 20;

  }

  #hd {
    margin-top: 40px;

  }

  body {
    width: 1200px;
    /*border: black solid;*/
    margin: 0 auto;
    height: 3000px;

  }

  nav {
    height: 50px;
    background-color: #f9872a;
    margin-bottom: 10px;
  }

  nav li {
    display: inline-block;
    float: left;
    border-left: white solid;
    border-right: white solid;
    height: 50px;
    width: 200px;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: x-large;
  }

  /*跑马灯*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*header*/

  #guess {
    position: absolute;
    top: 1300px;
    left: 20%;
  }

  #t1 {
    display: none;
  }
</style>
