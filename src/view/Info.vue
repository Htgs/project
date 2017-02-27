<template>
  <div id="info">
    <pagetitle :curHash="curHash"></pagetitle>
    <information :pid="pid" :plan="plan"></information>
    <photobutton></photobutton>
  </div>
</template>

<script>
  var PageTitle = require('../components/PageTitle.vue')
  var Information = require('../components/Information.vue')
  var PhotoButton = require('../components/PhotoButton.vue')
  var testplanJson = require('./plan.json')
  import router from '../router/index'

  export default {
    name: 'info',
    data () {
      return {
        curHash: 'info',
        pid: router.currentRoute.params.id,
        plan: testplanJson.data
      }
    },
    components: {
      'pagetitle': PageTitle,
      'information': Information,
      'photobutton': PhotoButton
    }
  }
</script>

<style>
</style>
