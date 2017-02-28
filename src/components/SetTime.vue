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
    </table>
    <transition name="slide">
    <ul class="calendar-list clearfix" id="cBox"
      v-gesture:swiper="{methods:swipe}">
      <li>
        <table class="calendar-days">
          <tr colspan="7" v-for="(day,k1) in prevDays">
            <td
              v-for="(child,k2) in day"
              v-bind:class="{'selected':child.selected,'disabled':child.disabled}">
              <span>{{child.day}}</span>
            </td>
          </tr>
        </table>
      </li>
      <li>
        <table class="calendar-days">
          <tr colspan="7" v-for="(day,k1) in days">
              <!-- v-on:click="select(k1,k2,$event)" -->
            <td
              v-for="(child,k2) in day"
              v-bind:class="{'selected':child.selected,'disabled':child.disabled}"
              v-gesture:tap="{ methods:select, k1:k1, k2:k2 }">
              <span>{{child.day}}</span>
            </td>
          </tr>
        </table>
      </li>
      <li>
        <table class="calendar-days">
          <tr colspan="7" v-for="(day,k1) in nextDays">
            <td
              v-for="(child,k2) in day"
              v-bind:class="{'selected':child.selected,'disabled':child.disabled}">
              <span>{{child.day}}</span>
            </td>
          </tr>
        </table>
      </li>
    </ul>
    </transition>
  </div>
</template>

<script>

  import { mapMutations } from 'vuex'

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
        prevDays: [],
        days: [],
        nextDays: [],
        today: [],
        currentMonth: Number,
        monthString: ''
      }
    },
    methods: {

      ...mapMutations([
        'setmonth'
      ]),
      init: function () {
        var now = new Date()
        this.year = now.getFullYear()
        this.month = now.getMonth()
        this.day = now.getDate()
        this.monthString = this.months[this.month]
        // 当前月的上月
        var prevMonth = this.prevMonth(this.year, this.month)
        this.prevDays = this.render(prevMonth.year, prevMonth.month)
        // this.prevDays = this.prevMonth(this.year, this.month)
        // 当前月
        this.days = this.render(this.year, this.month)
        // 当前月的下月
        var nextMonth = this.nextMonth(this.year, this.month)
        this.nextDays = this.render(nextMonth.year, nextMonth.month)
        // this.nextDays = this.nextMonth(this.year, this.month)
      },
      render: function (y, m) {
        var firstDayOfMonth = new Date(y, m, 1).getDay() // 获取当月第一天是星期几
        var lastDateOfMonth = new Date(y, m + 1, 0).getDate() // 获取当月一共有多少天
        var lastDayOfLastMonth = new Date(y, m, 0).getDate() // 获取上月一共有多少天
        // console.log('上月一共有' + lastDayOfLastMonth)
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
          if (chkY === y && chkM === m && i === this.day) {
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
            if (temp.length < 6) {
              temp[5] = []
              for (var ex = 0; ex <= 6; ex++) {
                temp[5].push({
                  day: q,
                  disabled: true
                })
                q++
              }
            }
          }
        }
        if (temp.length < 6) {
          var p = 1
          temp[5] = []
          for (var ex1 = 0; ex1 <= 6; ex1++) {
            temp[5].push({
              day: p,
              disabled: true
            })
            p++
          }
        }
        return temp
      },
      // 上月
      prevMonth: function (y, m) {
        var year = y
        var month = m
        if (month === 0) {
          month = 11
          year = parseInt(this.year) - 1
        } else {
          month = parseInt(this.month) - 1
        }
        return {
          year: year,
          month: month
        }
      },
      //  下月
      nextMonth: function (y, m) {
        var year = y
        var month = m
        if (month === 11) {
          month = 0
          year = parseInt(this.year) + 1
        } else {
          month = parseInt(this.month) + 1
        }
        // return this.render(year, month)
        return {
          year: year,
          month: month
        }
      },
      select: function (params) {
        var k1 = params.k1
        var k2 = params.k2
        var e = params.e
        var box = document.querySelector('#cBox')
        if (e !== undefined) e.stopPropagation()
        var selectedDay = this.days[k1][k2]
        this.days.forEach(v => {
          v.forEach(vv => {
            vv.selected = false
          })
        })
        if (selectedDay.disabled === true) {
          if (k1 === 0) {
            var prevMonth = this.prevMonth(this.year, this.month)
            this.year = prevMonth.year
            this.month = prevMonth.month
            // this.day = selectedDay.day
            this.day = 0
            this.prev(box)
          } else if (k1 === this.days.length - 1 || k1 === this.days.length - 2) {
            var nextMonth = this.nextMonth(this.year, this.month)
            this.year = nextMonth.year
            this.month = nextMonth.month
            // this.day = selectedDay.day
            this.day = 0
            this.next(box)
          }
          this.curMonth(this.year, this.month, this.day)
        } else {
          this.day = selectedDay.day
          this.days[k1][k2].selected = true
        }
      },
      curMonth: function (y, m, d) {
        this.monthString = this.months[m]
        // 当前月
        this.days = this.render(y, m)
        // 当前月的上月
        var prevMonth = this.prevMonth(y, m)
        this.prevDays = this.render(prevMonth.year, prevMonth.month)
        // this.prevDays = this.prevMonth(this.year, this.month)
        // 当前月的下月
        var nextMonth = this.nextMonth(y, m)
        this.nextDays = this.render(nextMonth.year, nextMonth.month)
      },
      prev: function (el) {
        el.classList.add('prev')
        el.addEventListener('transitionend', function () {
          el.classList.remove('prev')
        }, false)
        el.addEventListener('webkitTransitionend', function () {
          el.classList.remove('prev')
        }, false)
      },
      next: function (el) {
        el.classList.add('next')
        el.addEventListener('transitionend', function () {
          el.classList.remove('next')
        }, false)
        el.addEventListener('webkitTransitionend', function () {
          el.classList.remove('prev')
        }, false)
      },
      // 日历左右滑动
      swipe: function (params) {
        // console.dir(params)
        // console.dir(params.dir)
        var dir = params.dir
        var cbox = document.querySelector('#cBox')
        if (dir === 'left') {
          var prevMonth = this.prevMonth(this.year, this.month)
          this.year = prevMonth.year
          this.month = prevMonth.month
          this.day = 0
          this.prev(cbox)
        }
        if (dir === 'right') {
          var nextMonth = this.nextMonth(this.year, this.month)
          this.year = nextMonth.year
          this.month = nextMonth.month
          this.day = 0
          this.next(cbox)
        }
        this.curMonth(this.year, this.month, this.day)
      },
      senddate: function () {
        this.setmonth(this.monthString)
        this.$emit('senddate', this.year, this.currentMonth, this.day)
      }
      // sendMonth: function () {
      //   var monthString = this.monthString
      //   this.$store.dispatch('getmonth', {
      //     monthString: monthString
      //   })
      // }
    },
    watch: {
      days: {
        handler: function (v, nv) {
          this.senddate()
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  .calendar{
    width: 3.75rem;
    font-size: 0.12rem;
    overflow: hidden;
  }
  .calendar-days{
    width: 3.75rem;
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
  .calendar-list {
    width: 11.25rem;
    transform: translateX(-3.75rem);
  }
  .calendar-list li{
    float: left;
    width: 3.75rem;
  }
  .prev {
    transform: translateX(0rem);
    transition: all .3s ease;
  }
  .next {
    transform: translateX(-7.5rem);
    transition: all .3s ease;
  }
  .slide-enter{}
  .slide-enter-active{}
  .slide-leave{}
  .slide-leave-active{}
</style>
