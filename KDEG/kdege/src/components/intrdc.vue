<!--产品介绍页面-->
<template>
  <body>
  <my-header></my-header>

  <img src="../assets/XREU9272.jpg" width="100%"/>
  <div id="introduce">
    <hr>
    <!--菜单栏模块-->
    <!--各种产品介绍-->
    <el-tabs :tab-position="tabPosition1" style="height: 5000px">
      <el-tab-pane label="E速达">

        <div class="text">

          <h2>E速达：</h2>
          <br>

          E速达平台提供的上海市浦西外环线 内；浦东中环线以内范围内；崇明三岛除外
          ，寄收距离10公里内3小时送达，超过10公里，每增加5公里增加30分钟的即时递送服务。

        </div>
      </el-tab-pane>
      <el-tab-pane label="定制配">
        <div class="text">
          <h2>定制配:</h2>
          <h4>（该产品只针对签约用户，详情咨询客服）</h4>
          <br>

          1、当日达：E速达平台提供的上海市浦西外环线 内；浦东中环线以 内范围内；崇明三 岛除外
          ，当日11:30时前收寄的，承诺当日18：00时前送达的当日寄送，当日送达的快递服务。<br>
          2、次晨达：E速达平台提供的上海市范围内【崇明除外】，当日17:00时前收寄的，承诺次日12时前送达的优质快递服务。<br>
          3、次日达：E速达平台提供的上海市范围内【崇明除外】，当日17:00时前收寄的，承诺次日18：00时前送达的快递服务。
          <br><br>
          <h3>暂未上线，敬请期待！</h3>
        </div>
      </el-tab-pane>
      <el-tab-pane label="E直达">
        <div class="text">

          <h2>E直达</h2>
          <br>

          E速达平台提供的上海市全境范围内，专人直取直送的快递服务。
          <br><br>
          <h3>暂未上线，敬请期待！</h3>
        </div>


      </el-tab-pane>
      <el-tab-pane label="第三方">
        <div class="text">
          <h2>第三方</h2>
          <br>
          E速达平台提供的通过第三方快递服务商寄送的快递服务，详情请咨询E速达平台客服人员。
          <br><br>
          <h3>暂未上线，敬请期待！</h3></div>


      </el-tab-pane>
      <!--价目表-->
      <el-tab-pane label="资费查询">
        <img src="../../static/价目表.png" width="100%"/>

      </el-tab-pane>
      <!--操作指南模块-->
      <el-tab-pane label="操作指南">
        <div style=";margin-left: 40px">

          <el-tabs type="border-card" style="background-color: white;">
            <el-tab-pane label="App操作篇">

              <img src="../assets/app.png" width="1020px"/><br>
              <a
                href="../static/附件快递e哥客户下单操作手册.doc" target="_blank"
                style="text-decoration: none">下载附件</a>
            </el-tab-pane>

            <el-tab-pane label="PC操作篇"><img src="../assets/pc操作.png" width="100%"/><br>
              <a href="../static/附件快递e哥项目PC端操作.doc" target="_blank"
                 style="text-decoration: none">下载附件</a></el-tab-pane>
            <el-tab-pane label="快递员提现篇" style="height: 2000px">
              <img src="../assets/快递员提现1.jpg" height="878" width="892"/><br>
              <img src="../assets/快递员提现2.jpg" height="779" width="865"/><br>
              <a href="../static/附件快递e哥快递员提现操作手册.doc" target="_blank"
                 style="text-decoration: none">下载附件</a>
            </el-tab-pane>
            <el-tab-pane label="签约用户下单篇">

              <div style="margin-left: 100px">
                <img src="../assets/签约用户1.png" height="540" width="720"/><br><img src="../assets/签约用户2.png" height="542"
                                                                                  width="728"/><br><img
                src="../assets/签约用户3.png" height="502" width="746"/><br>

                <img src="../assets/签约用户4.png" height="473" width="726"/><br>

                <img src="../assets/签约用户5.png" height="630" width="733"/><br>
                <a
                  href="../static/附件快递e哥客户下单操作手册.doc" target="_blank"
                  style="text-decoration: none">下载附件</a></div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
  <my-footer></my-footer>
  </body>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '2',
        activeIndex2: '2',
        tabPosition1: "left",

          }

      }
    }


</script>

<style>
  label {
    color: #fc6a15;
  }

  #hd {
    margin-top: 20px;

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

  .el-tabs__item.is-active {
    color: #fc6a15;
  }

  .el-tabs__item:hover {
    color: #fc6a15;
    cursor: pointer;
  }

  .text {
    font-family: "微软雅黑";
    font-size: larger;
    margin-left: 20px;
    border: #c2c7d0 solid 1px;
    padding: 40px 40px 40px 40px;

  }

  /*header*/
  .el-menu-item {
    text-decoration: none;
  }

  .router-link {

    text-decoration: none;

  }
</style>
