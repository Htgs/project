import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import index from './modules/index'
// import info from './modules/info'
// import set from './modules/set'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// const logger = createLogger({
//   collapsed: false, // 自动展开记录的 mutation
//   transformer (state) {
//     // 在开始记录之前转换状态
//     // 例如，只返回指定的子树
//     return state.subTree
//   },
//   mutationTransformer (mutation) {
//     // mutation 按照 { type, payload } 格式记录
//     // 我们可以按任意方式格式化
//     return mutation.type
//   }
// })

export default new Vuex.Store({
  // actions,
  // getters,
  // modules: {
  //   index,
  //   info,
  //   set
  // },
  // strict: debug,
  state: {
    title: '生产计划管理',
    year: {
      type: Number,
      default: 0
    },
    month: {
      type: Number,
      default: 0
    },
    day: {
      type: Number,
      default: 0
    }
  },
  getters: {
    monthString: state => {
      return state
    }
  },
  mutations: {
    setmonth (s, payload) {
      s.title = payload + '月份'
    },
    settitle (s) {
      s.title = '生产计划管理'
    }
  },
  actions: {
    getmonth (context) {
      context.commit('getmonth')
    }
  },
  plugin: debug ? [createLogger()] : []
})
