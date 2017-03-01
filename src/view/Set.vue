<template>
  <div id="set">
    <pagetitle></pagetitle>
    <settime v-on:senddate="getdate"></settime>
    <setbutton :obj="obj1"></setbutton>
    <setbutton :obj="obj2" style="margin-top: -0.01rem"></setbutton>
  </div>
</template>

<script>
  var PageTitle = require('../components/PageTitle.vue')
  var SetTime = require('../components/SetTime.vue')
  var SetButton = require('../components/SetButton.vue')

  // 根据服务器过来的数据进行渲染
  // 有关这个计划的数据
  
  export default {
    name: 'set',
    data () {
      return {
        curHash: 'set',
        obj1: {
          isclocks: true,
          msg: '时间',
          num: '17:00'
        },
        obj2: {
          isclocks: false,
          msg: '用量',
          num: '100kg'
        },
        calendar: {
          year: 0,
          month: 0,
          day: 0,
          hour: 0
        }
      }
    },
    components: {
      'pagetitle': PageTitle,
      'settime': SetTime,
      'setbutton': SetButton
    },
    methods: {
      changeda: function () {
        this.curHash += 'r'
      },
      getdate: function (date) {
        this.calendar.year = date.y
        this.calendar.month = date.m + 1
        this.calendar.day = date.d
        console.dir(this)
      }
    },
    watch: {
      curHash: function (v, nv) {
        console.log('a is change')
      }
    }
  }
</script>

<style>
</style>
