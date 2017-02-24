<template>
  <dl>
    <dt>
      <div class="row bg-ea">
        <span class="row-item">操作类型</span>
        <span class="row-item">计划日期</span>
        <span class="row-item">状态</span>
        <span class="row-item">剩余量</span>
      </div>
    </dt>
    <dd class="list">
      <div class="row">
          <span class="row-item">施肥</span>
          <span class="row-item">2017-1-1</span>
          <span class="row-item">未完成</span>
          <span class="row-item">100kg</span>
      </div>
    </dd>
  </dl>
</template>

<script>
    export default {}
</script>

<style scoped>
  .bg-ea{ background-color: #EAEAEA; }
  .row{ width: 100%; height: 2em; color: #565656; text-align: center; line-height: 2em; }
  .row-item{ float: left; width: 25%; font-size: 0.8em; }
  .list{ border-top: 1px solid #BABABA; }
  .list:last-child{ border-bottom: 1px solid #bababa; }
  .list-checkbox{ width: 1em; height: 1em; border-color: #C8C8C8; }

</style>
