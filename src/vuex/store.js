import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// 状态;
const state = {
  count: 2
}
// 突变，方法;同步
// action和mutations类似，只不过action是异步;
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}
// 从表面是获得的意思，可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工;
// 比如我们现在要对store.js文件中的count进行一个计算属性的操作，就是在它输出前，给它加上50.
const getters = {
  count: function (state) {
    state.count += 50
    return state.count
  }
}
// module,未编写，请参照代理商管理系统;
export default new Vuex.Store({
  state,
  mutations,
  getters
})
