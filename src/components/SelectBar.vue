<template>
  <div class="selectbar">
    <form>
      <input type="botton" value="新建" class="selectbar-btn">
      <select name="type">
        <option value="0" selected>选择类型</option>
        <option value="0">1</option>
        <option value="0">2</option>
      </select>
      <select name="status">
        <option value="0" selected>选择状态</option>
        <option value="0">1</option>
        <option value="0">2</option>
      </select>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'selectbar'
  }
</script>

<style scoped>
  .selectbar{
    width: 3.75rem;
    height: 0.51rem;
    padding: 0.04rem 0.06rem;
    font-size: 0.13rem;
  }
  .selectbar form{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .selectbar-btn{
    width: 0.65rem;
    height: 0.42rem;
    color: #fff;
    border: 0;
    background-color: #0099CB;
    /*font-size: 0.13rem;*/
    text-align: center;
  }
  .selectbar form select{
    position: relative;
    width: 1.42rem;
    height: 0.42rem;
    border: 0.01rem solid #E5E5E5;
    color: #C9C9C9;
    padding-left: 0.04rem;
    background: url(../assets/img/arrowdown.png) no-repeat 1.18rem center;
    background-size: 0.18rem 0.1rem;
  }
  .selectbar form select:last-child{
    margin-left: 0.05rem;
  }
  .selectbar form select::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.36rem;
    height: 0.2rem;
    background: url(../assets/img/arrowdown.png) no-repeat center center;
    background-size: 0.18rem 0.1rem;
  }
</style>
