<template>
  <div class="hello">
    <h1>123456</h1>
    <h2>{{$store.state.count}}-{{count}}</h2>
    <button @click="add(10)">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    // es6的扩展运算符;
    // count(){
    //   return $store.state.count
    // }
    ...mapState(['count']),
    // count(){
    //   return $store.getters.state.count
    // }
    ...mapGetters(['count'])
  },
  //mapMutations第一个参数可以添加组件名,...mapMutations('Count',['add','reduce']);
  methods: mapMutations(['add', 'reduce'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
