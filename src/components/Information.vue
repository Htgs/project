<template>
  <div class="info">
    <div class="info-settime" @click="go">
      <span>设置日期 <i class="clock"></i></span>
      <s>◇</s>
    </div>
    <div class="info-table">
      <table>
        <tr>
          <td>种植批次号</td>
          <td colspan="2">{{plan.num}}</td>
        </tr>
        <tr>
          <td>计划内容</td>
          <td colspan="2">{{plan.content}}</td>
        </tr>
        <tr>
          <td>计划日期</td>
          <td colspan="2">{{plan.planDate}}</td>
        </tr>
        <tr>
          <td>安排人员</td>
          <td colspan="2">{{plan.staff}}</td>
        </tr>
        <tr>
          <td>操作类型</td>
          <td colspan="2">{{plan.optType}}</td>
        </tr>
        <tr>
          <td>状态</td>
          <td colspan="2">{{plan.status}}</td>
        </tr>
        <tr>
          <td>剩余量</td>
          <td colspan="2">{{plan.surplus}}</td>
        </tr>
        <tr>
          <td>计划总量</td>
          <td colspan="2">{{plan.sum}}</td>
        </tr>
      </table> 
    </div>
  </div>
</template>

<script>
  
  import router from '../router/index'

  export default {
    name: 'information',
    props: {
      plan: {
        type: Object
      },
      pid: {
        type: String
      }
    },
    methods: {
      go: function () {
        event.stopPropagation()
        router.push({
          path: '/set:' + this.pid
        })
      }
    }
  }
</script>

<style scoped>
  .info{
    width: 3.75rem;
    background-color: #F1F2F4;
  }
  .info-settime{
    background-color: #fff;
    font-size: 0.13rem;
    margin-bottom: 0.1rem;
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.21rem;
    border-bottom: 0.01rem solid #D3D5D4;
  }
  .info-settime span{
    float: left;
  }
  .info-settime .clock {
    display: inline-block;
    width: 0.18rem;
    height: 0.21rem;
    background-image: url(../assets/img/clock2.png);
    background-size: 0.18rem 0.21rem;
    background-repeat: no-repeat;
    background-position: center center;
    vertical-align: -0.05rem;
  }
  .info-settime s{
    position: relative;
    float: right;
    display: inline-block;
    font-style: normal;
    text-decoration: none;
    font-size: 0.46rem;
  }
  .info-settime s::after{
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    height: 0.46rem;
    width: 0.23rem;
    background-color: #fff;
    z-index: 1;
  }
  .info-table{
    background-color: #fff;
    padding: 0.07rem 0.05rem;
    font-size: 0.13rem;
  }
  .info-table table{
    width: 100%;
    border: 0.01rem solid #B5B5B5;
  }
  .info-table table td{
    padding: 0.16rem 0 0.16rem 0.135rem;
    border-bottom: 0.01rem solid #B5B5B5;
  }
  .info-table table td:nth-child(2n){
    border-left: 0.01rem solid #B5B5B5;
  }
</style>
