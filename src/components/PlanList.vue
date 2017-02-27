<template>
  <table class="planlist">
    <tr>
      <th>操作类型</th>
      <th>计划日期</th>
      <th>状态</th>
      <th>剩余量</th>
    </tr>
    <tr v-for="(plan,i) in plans" :id="plan.planId" v-on:click="go(plan.planId)">
      <td>{{plan.optType}}</td>
      <td>{{plan.planDate}}</td>
      <td>{{plan.status}}</td>
      <td>{{plan.surplus}}</td>
    </tr>
  </table>
</template>

<script>

  import router from '../router/index'

  // var testJson = require('../view/test.json')
  export default {
    props: {
      plans: {
        type: Array
      }
    },
    methods: {
      go: function (pid) {
        event.stopPropagation()
        router.push({
          path: '/info:' + pid,
          params: {pid: pid}
        })
      }
    }
  }
</script>

<style scoped>
  .planlist{
    width: 3.75rem;
    font-size: 0.13rem;
    color: #595758;
    text-align: center;
  }
  .planlist th{
    border-top: 0.01rem solid #B5B5B5;
    border-bottom: 0.01rem solid #B5B5B5;
    background-color: #EAEAEA;
    padding: 0.18rem 0;
    font-weight: normal;
  }
  .planlist td{
    padding: 0.18rem 0;
    border-bottom: 0.01rem solid #B9B9B9;
  }
</style>
