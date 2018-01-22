<template>
  <body>
  <my-header></my-header>


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
      <br>
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
        <button type="button">hi</button>
        <p>niaho</p>
      </center>

    </div>

  </div>
  <script type="application/javascript">
    // import $ from 'jquery'

    function s1() {
      var tx1 = document.getElementById("t1");
      tx1.style.display = "block";
    }

    function open1() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: 'action: ${ action }'
          });
        }
      });
    }

    $(document).ready(function () {
      $("button").click(function () {
        $("p").hide();
      });
    });


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
    left: 20%;
    padding-top: 0px;
  }

  #t1 {
    display: none;
  }
</style>
