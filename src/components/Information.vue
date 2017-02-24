<template>
    <div class="info">
        <div class="info-settime">
            <span>设置日期 <i class="clock"></i></span>
            <s>◇</s>
        </div>
        <div class="info-table">
           <table>
               <tr>
                   <td>种植批次号</td>
                   <td colspan="2">CV12345678901234</td>
               </tr>
               <tr>
                   <td>计划内容</td>
                   <td colspan="2">fdsafdas</td>
               </tr>
               <tr>
                   <td>计划日期</td>
                   <td colspan="2">2017-2-22</td>
               </tr>
               <tr>
                   <td>安排人员</td>
                   <td colspan="2">某某人</td>
               </tr>
               <tr>
                   <td>操作类型</td>
                   <td colspan="2">采购</td>
               </tr>
               <tr>
                   <td>状态</td>
                   <td colspan="2">未完成</td>
               </tr>
               <tr>
                   <td>剩余量</td>
                   <td colspan="2">100kg</td>
               </tr>
               <tr>
                   <td>计划总量</td>
                   <td colspan="2">400kg</td>
               </tr>
           </table> 
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'information'
        
    }
</script>

<style scoped>
    .info{
        background-color: #F2F2F2;
        color: #535353;
    }
    .info-settime{
        background-color: #fff;
        font-size: 0.8em;
        margin-bottom: 1em;
        height: 2.5em;
        line-height: 2.5em;
        padding: 0 1em;
    }
    .info-settime span{
        float: left;
        display: inline-block;
    }
    .info-settime .clock {
        display: inline-block;
        width: 2em;
        height: 2em;
        background-image: url(../assets/img/clock.png);
        background-size: 75% 75%;
        background-repeat: no-repeat;
        background-position: center center;
        vertical-align: middle;
    }
    .info-settime s{
        position: relative;
        float: right;
        display: inline-block;
        font-style: normal;
        text-decoration: none;
        font-size: 3em;
    }
    .info-settime s::after{
        content: '';
        position: absolute;
        top: 0;
        left: -118%;
        height: 0.8em;
        width: 1em;
        background-color: #fff;
        z-index: 1;
    }
    .info-table{
        background-color: #fff;
        padding: 0.3em;
    }
    .info-table table{
        width: 100%;
        border: 1px solid #D9D9D9;
        font-size: 0.8em;
    }
    .info-table table td{
        padding: 0.5em;
        padding-right: 0;
        border-bottom: 1px solid #d9d9d9;
    }
    .info-table table td:nth-child(2n){
        border-left: 1px solid #d9d9d9;
    }
</style>