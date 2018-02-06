<!--首页-->
<template>
  <body>
  <my-header></my-header>
  <div style="; width:100%;height:100%;margin:0px;position: relative ">
    <img src="../assets/首页.png" width="100%" style="margin-top: 0px"/>//首页的图片 by刘千羽
    <el-button type="warning" style="position: absolute;left: 46.2%" onclick="window.open('http://admin.ksudi.com')">
      E键下单
    </el-button>
    //这个是下单的按钮 在中间，链接是快速递做的登陆页面
    <el-button type="warning"
               style="outline: none;position: absolute;top:3790px;left: 7%;color: white;text-decoration: none">
      <router-link to="/interview" style="color: white;text-decoration: none">加入我们</router-link>
    </el-button>
    //这个是放在二维码上的加入按钮，点击跳到招募页面
    <video src="../assets/宣传视频.mp4" width="40%" controls="controls"></video>
    //宣传视频

    <!--预估邮价的部分 在页面中间-->
    <div id="guess" style="vertical-align: center">
      &nbsp&nbsp
      &nbsp&nbsp
      &nbsp&nbsp
      &nbsp&nbsp
      寄件地址:&nbsp&nbsp
      <el-input placeholder="请输入地址" style="width: 12%" value="" id="start" v-model="start1"></el-input>
      &nbsp&nbsp
      收件地址:&nbsp&nbsp;
      <el-input placeholder="请输入地址" style="width: 12%" value="" id="end" v-model="end1"></el-input>
      &nbsp&nbsp
      重量（公斤）:&nbsp&nbsp;
      <el-input placeholder="请输入重量" style="width: 12%" value="" id="weight" v-model="weighth1"></el-input>
      <!--<br><br>-->
      <!--&nbsp&nbsp&nbsp&nbsp-->
      &nbsp&nbsp
      &nbsp&nbsp
      <div id="allmap" style="display: none"></div>
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
      <br>
      <button class="btn btn-success btn-lg"
              style="outline: none;position: absolute;left: 40.2%"
              onclick="s2()">预估邮费
      </button>
      <br>
      <!--暂时的假数据-->
      <div id="t1">
        <el-alert
          :title="stri"
          type="success"
          center
          show-icon
        >
        </el-alert>

      </div>


    </div>
  </div>
  <script type="application/javascript">
    // import $ from 'jquery'
    var map = new BMap.Map("allmap")
    map.enableScrollWheelZoom();//启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();
    var myGeo = new BMap.Geocoder();
    var stri;
    var pointA, pointB;
    var price;
    var price1, price2;

    function s2() {
      // var dis =map.getDistance(pointA, pointB)[0];
      var s = document.getElementById("start");
      var e = document.getElementById("end");
      var w = document.getElementById("weight").value;

      myGeo.getPoint(s.value, function (point) {
        pointA = point;
        myGeo.getPoint(e.value, function (point) {
          pointB = point;
          var dis = (map.getDistance(pointA, pointB)).toFixed(2);
          // /到这边为止是得到了所有计算所需的变量了，下面开始计算
          if (w > 3 && w <= 10) {
            price1 = (w - 3) * 2;
          }
          else if (w > 10) {
            price1 = 14 + (w - 10) * 5;
          }
          else {
            price1 = 0
          }
          if (dis > 3000) {
            price2 = (dis - 3000) / 1000 * 2;
          } else {
            price2 = 0
          }
          price = (price1 + price2 + 10).toFixed(2);
          stri = "邮费为" + (price) + "元"

          alert(stri);
        }, "上海市")
      }, "上海市")
    }

    visible = true;
  </script>

  <my-footer></my-footer>
  </body>

</template>

<script type="application/javascript">


  export default {
    data() {
      //data里的都是初值
      return {
        activeIndex: '1',
        activeIndex2: '1',
        visible: false
      }
      methods: {

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
    top: 1296px;
    left: 10%;
    padding-top: 0px;
  }

  #t1 {
    display: none;
  }
</style>
