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
              @click="open1">预估邮费
      </button>
      <br>
      <!--暂时的假数据-->
      <!--<el-dialog :visible.sync="visible" title="Hello world">-->
      <!--<p>邮费为xx元</p>-->
      <!--</el-dialog>-->
      <!--<div id="t1">-->
      <!--<el-alert-->
      <!--:title="stri"-->
      <!--type="success"-->
      <!--center-->
      <!--show-icon-->
      <!--&gt;-->
      <!--</el-alert>-->

      <!--</div>-->


    </div>
  </div>
  <!--<script type="application/javascript">-->

  <my-footer></my-footer>
  </body>

</template>

<script type="application/javascript">

  export default {
    data: function () {

      //data里的都是初值
      return {
        activeIndex: '1',
        activeIndex2: '1',
        start1: '',
        weighth1: '',
        end1: '',

      }
    },
    methods: {
      open1: function () {
        var map = new BMap.Map("allmap")
        this.map.enableScrollWheelZoom();//启用滚轮放大缩小，默认禁用
        this.map.enableContinuousZoom();
        var myGeo = new BMap.Geocoder();



        var stri;
        var pointA, pointB;
        var price;
        var price1, price2;
        var stri = "hello"
        myGeo.getPoint(this.start1, function (point) {
          pointA = point;
          myGeo.getPoint(this.end1, function (point) {
            pointB = point;
            var dis = (map.getDistance(pointA, pointB)).toFixed(2);
            // /到这边为止是得到了所有计算所需的变量了，下面开始计算
            if (this.weighth1 > 3 && this.weighth1 <= 10) {
              price1 = (this.weighth1 - 3) * 2;
            }
            else if (this.weighth1 > 10) {
              price1 = 14 + (this.weighth1 - 10) * 5;
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
            var tx1 = document.getElementById("t1");
            tx1.style.display = "block";
            alert(stri);
            this.$alert(stri, '预估邮费为', {
              confirmButtonText: '确定',
              dangerouslyUseHTMLString: true
            });
          }, "上海市")
        }, "上海市")
      },


    }

    // open1() {
    //
    //   // const h = this.$createElement;
    //   this.$notify({
    //     title: '预计邮费为',
    //     message: stri
    //   });
    //
    // }
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
