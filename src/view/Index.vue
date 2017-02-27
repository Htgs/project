<template>
  <div id="index">
    <pagetitle :curHash="curHash"></pagetitle>
    <selectbar></selectbar>
    <planlist :plans="plans"></planlist>
    <pager></pager>
  </div>
</template>

<script>
  var PageTitle = require('../components/PageTitle.vue')
  var SelectBar = require('../components/SelectBar.vue')
  var PlanList = require('../components/PlanList.vue')
  var Pager = require('../components/Pager.vue')
  var testJson = require('./test.json')

  export default {
    name: 'index',
    data () {
      return {
        curHash: 'index',
        plans: testJson.data.plans
      }
    },
    components: {
      'pagetitle': PageTitle,
      'selectbar': SelectBar,
      'planlist': PlanList,
      'pager': Pager
    },
    created () {
      console.dir(this)
    }
  }
</script>

<style>
</style>

