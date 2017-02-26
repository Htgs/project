<template>
  <div class="calendar">
    <table class="calendar-days">
      <tr colspan="7">
        <th
        v-for="week in weeks"
        v-bind:class="{'weekend':week == '六' || week == '日'}">
          {{week}}
        </th>
      </tr>
      <tr v-for="(day,k1) in days">
        <td
          v-for="(child,k2) in day"
          v-bind:class="{'selected':child.selected,'disabled':child.disabled}">
          <span>{{child.day}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      weeks: {
        type: Array,
        default: function () {
          return ['日', '一', '二', '三', '四', '五', '六']
        }
      },
      months: {
        type: Array,
        default: function () {
          return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        }
      }
    },
    created () {
      this.init()
    },
    data () {
      return {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        days: [],
        today: [],
        currentMonth: Number,
        monthString: ''
      }
    },
    methods: {
      init: function () {
        var now = new Date()
        this.year = now.getFullYear()
        this.month = now.getMonth()
        this.day = now.getDate()
        this.hour = now.getHours()
        this.monthString = this.months[this.month]
        this.render(this.year, this.month)
      },
      render: function (y, m) {
        var firstDayOfMonth = new Date(y, m, 1).getDay() // 获取当月第一天是星期几
        var lastDateOfMonth = new Date(y, m + 1, 0).getDate() // 获取当月一共有多少天
        var lastDayOfLastMonth = new Date(y, m, 0).getDate()
        this.currentMonth = m
        var i
        var line = 0
        var temp = []
        for (i = 1; i <= lastDateOfMonth; i++) {
          var dow = new Date(y, m, i).getDay() // 获取当前月份每天对应星期几
          if (dow === 0) {
            temp[line] = []
          } else if (i === 1) {
            temp[line] = []
            var k = lastDayOfLastMonth - firstDayOfMonth + 1
            for (var j = 0; j < firstDayOfMonth; j++) {
              temp[line].push({
                day: k,
                disabled: true
              })
              k++
            }
          }
          var chk = new Date()
          var chkY = chk.getFullYear()
          var chkM = chk.getMonth()
          if (chkY === this.year && chkM === this.month && i === this.day) {
            temp[line].push({
              day: i,
              selected: true
            })
            this.today = [line, temp[line].length - 1]
          } else {
            var options = {
              day: i,
              selected: false
            }
            temp[line].push(options)
          }
          if (dow === 6) line++
          else if (i === lastDateOfMonth) {
            var q = 1
            for (dow; dow < 6; dow++) {
              temp[line].push({
                day: q,
                disabled: true
              })
              q++
            }
          }
        }
        this.days = temp
        console.log(this.monthString)
      }
    }
  }
</script>

<style scoped>
  .calendar{
    width: 3.75rem;
    font-size: 0.12rem;
  }
  .calendar-days{
      width: 100%;
      text-align: center;
  }
  .calendar-days th{
      background-color: #F5F6F8;
      color: #A6AFB8;
      padding: 0.1rem 0;
      font-weight: normal;
  }
  .calendar-days th.weekend {
      color: #F9BF15;
  }
  .calendar-days td{
      position: relative;
      color: #3E4D62;
      padding: 0.185rem 0;
  }
  .calendar-days td.selected::before{
      content: '';
      width: 0.45rem;
      height: 0.45rem;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #7991E7;
      border-radius: 50%;
      margin-top: -0.225rem;
      margin-left: -0.225rem;
  }
  .calendar-days td.selected span{
      position: relative;
      color: #fff;
  }
  .calendar-days td.disabled{
      color: #DADBE0;
  }
</style>
