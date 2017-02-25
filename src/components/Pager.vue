<template>
  <div class="pager">
    <ul class="clearfix">
      <li class="pager-side">«</li>
      <li class="cur">1</li>
      <li>2</li>
      <li>3</li>
      <li>...</li>
      <li>20</li>
      <li class="pager-side">»</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'pager'
  }
</script>

<style scoped>
  .pager{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2001;
    width: 3.75rem;
    padding: 0.1rem 0.065rem;
    font-size: 0.16rem;
    text-align: center;
  }
  .pager ul{
    width: 100%;
    margin: 0 auto;
  }
  .pager ul li{
    float: left;
    width: 0.5rem;
    height: 0.58rem;
    border: 0.01rem solid #CACACA;
    margin-left: -0.01rem;
    line-height: 0.58rem;
    color: #0199CB;
  }
  .pager ul li.cur{
    background-color: #0199CB;
    color: #fff;
  }
  .pager .pager-side{
    width: 0.58rem;
    color: #909090;
    font-size: 0.2rem
  }
</style>
