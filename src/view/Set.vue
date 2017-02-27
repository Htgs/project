<template>
  <div id="set">
    <pagetitle></pagetitle>
    <settime></settime>
    <setbutton :obj="obj1"></setbutton>
    <setbutton :obj="obj2"></setbutton>
  </div>
</template>

<script>
  var PageTitle = require('../components/PageTitle.vue')
  var SetTime = require('../components/SetTime.vue')
  var SetButton = require('../components/SetButton.vue')

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
        }
      }
    },
    components: {
      'pagetitle': PageTitle,
      'settime': SetTime,
      'setbutton': SetButton
    }
  }
</script>

<style>
</style>
