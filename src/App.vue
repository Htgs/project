<template>
  <div id="app" class="page">
    <div class="page-title">
      <h1>生产计划管理</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './assets/css/style.css';

.page{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
.page-title{
  background-color: #009ACA;
  text-align: center;
  color: #fff;
}
.page-title h1{
  font-size: 1em;
  font-weight: normal;
  margin: 0;
  padding: 0.33em;
}
</style>
