<template>
  <div class="setbtn">
    <div class="setbtn-left">
      <i v-bind:class="[obj.isclocks ? 'setbtn-clock' : 'setbtn-quantity']"></i>
      <span>{{obj.msg}}</span>
    </div>
    <div class="setbtn-right">
      <span>{{obj.num}}</span>
      <i>◇</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      obj: {
        type: Object,
        isclocks: Boolean,
        msg: String,
        num: String
      }
    }
  }
</script>

<style scoped>
  .setbtn{
    width: 3.75rem;
    border-top: 0.01rem solid #D6D8D7;
    border-bottom: 0.01rem solid #D6D8D7;
    font-size: 0.14rem;
    padding: 0 0.25rem;
    height: 0.6rem;
  }
  .setbtn-left, .setbtn-right{
    float: left;
    padding: 0.14rem 0;
    height: 0.27rem;
    line-height: 0.27rem;
  }
  .setbtn-left{
    float: left;
  }
  .setbtn-right{
    float: right;
  }
  .setbtn-right i{
    position: relative;
    font-size: 0.24rem;
    font-weight: normal;
    vertical-align: middle;
  }
  .setbtn-right i::before{
    content: '';
    position: absolute;
    left: -0.02rem;
    top: 0;
    display: block;
    width: 0.09rem;
    height: 0.24rem;
    background-color: #fff;
  }
  .setbtn-clock{
    display: inline-block;
    width: 0.23rem;
    height: 0.27rem;
    background: url(../assets/img/clock1.png) no-repeat center center;
    background-size: 0.23rem 0.27rem;
    vertical-align: middle;
  }
  .setbtn-quantity{
    display: inline-block;
    width: 0.14rem;
    height: 0.19rem;
    background: url(../assets/img/icon2.png) no-repeat center center;
    background-size: 0.14rem 0.2rem;
    vertical-align: middle;
  }
</style>
