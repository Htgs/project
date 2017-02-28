<template>
    <div class="header">
      <span v-if="curHash == 'index' ? false : true" class="header-left" @click="goback">取消</span>
      <h1>{{title}}</h1>
      <span v-if="curHash == 'index' ? false : true" class="header-right">完成</span>
      <div v-else class="header-msg">
        <i>
          <b>4</b>
        </i>
        <s>消息</s>
      </div>
    </div>
</template>

<script>

  import router from '../router/index'

  export default {
    name: 'PageTitle',
    // data () {
    //   title: {
    //     type: String,
    //     default: '生产计划管理'
    //   }
    // },
    props: {
      curHash: {
        type: String,
        default: ''
      }
    },
    methods: {
      goback () {
        router.go(-1)
      }
    },
    computed: {
      title () {
        return this.$store.state.title
      }
    }
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
.header-left, .header-right, .header-msg{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.17rem;
}
.header-left{
  left: 0.15rem;
}
.header-right{
  right: 0.15rem;
}
.header-msg{
  right: 0.15rem;
  height: 0.33rem;
  width: 0.3rem;
}
.header-msg i{
  position: relative;
  float: left;
  display: block;
  width: 0.22rem;
  height: 0.2rem;
  background-image: url(../assets/img/msg.png);
  background-repeat: no-repeat;
  background-size: 0.22rem 0.2rem;
  background-position: center center;
}
.header-msg i b{
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -0.055rem;
  display: block;
  width: 0.11rem;
  height: 0.11rem;
  background-color: #F77871;
  text-align: center;
  font-size: 0.05rem;
  line-height: 0.11rem;
  border-radius: 50%;
}
.header-msg s{
  float: left;
  font-size: 0.1rem;
}
</style>
