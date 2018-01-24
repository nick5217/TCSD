<!--招募页面 一个图片加一个返回首页的按钮-->
<template>
  <div style="position: relative">
    <img style="z-index: -10" src="../assets/招募图片.png" width="100%"/>
    <el-button align="center" type="warning" round
               style=";z-index: 20;position:absolute;left:8% ;top:40px;outline: none;">
      <router-link to="/" style="color: white;text-decoration: none">返回首页</router-link>
    </el-button>
    <my-footer></my-footer>
  </div>
</template>
<script>


</script>
