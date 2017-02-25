<template>
    <div class="header">
      <span class="header-left">取消</span>
      <h1>生产计划管理</h1>
      <span class="header-right">完成</span>
    </div>
</template>

<script>
  console.log('PageTitle loaded!')

  export default {
    name: 'PageTitle'
  }
</script>

<style scoped>
.header{
  position: relative;
  width: 3.75rem;
  background-color: #009ACA;
  text-align: center;
  color: #fff;
  padding: 0.14rem 0;
}
.header h1{
  font-size: 0.18rem;
  font-weight: normal;
  margin: 0;
}
.header-left{
  position: absolute;
  top: 50%;
  left: 0.15rem;
  transform: translateY(-50%);
  font-size: 0.17rem;
}
.header-right{
  position: absolute;
  top: 50%;
  right: 0.15rem;
  transform: translateY(-50%);
  font-size: 0.17rem;
}
</style>
