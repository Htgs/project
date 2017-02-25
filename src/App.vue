<template>
  <div id="app" class="page">
    <pagetitle></pagetitle>
    <!-- <selectbar></selectbar>
    <planlist></planlist>
    <pager></pager> -->

    <router-view></router-view>
  </div>
</template>

<script>
  var PageTitle = require('./components/PageTitle.vue')
  var SelectBar = require('./components/SelectBar.vue')
  var PlanList = require('./components/PlanList.vue')
  var Pager = require('./components/Pager.vue')
  var SetTime = require('./components/SetTime.vue')
  export default {
    name: 'app',
    components: {
      'pagetitle': PageTitle,
      'selectbar': SelectBar,
      'planlist': PlanList,
      'pager': Pager,
      'settime': SetTime
    }
  }
</script>

<style>
@import './assets/css/style.css';
.page{
  width: 10rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
</style>
