<template>
    <div id="count">
        <h4>{{name}}</h4>
        <h4>{{address}}</h4>
        <h3>{{sum}}</h3>
        <h4>当前求和放大10倍：{{bigSum}}</h4>
        <h4 style="color: red;">Person中人数{{personList.length}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add(n)">+</button>
        <button @click="desc(n)">-</button>
        <button @click="addOdd(n)">sum为奇数加1</button>
        <button @click="addWait(n)">等一秒之后加1</button>
    </div>
  </template>
  
  <script>
      import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
      export default {
          name: 'Count',
          data() {
            return {
              n:1,
            }
          },methods: {
            ...mapMutations('count',{desc:'DESC'}),
            ...mapActions('count',['add', 'addOdd', 'addWait'])
          },
          computed:{
              ...mapState('count',['sum','name','address']),
              ...mapState('persons',['personList']),
              ...mapGetters('count',['bigSum']),
          },
      }
  </script>