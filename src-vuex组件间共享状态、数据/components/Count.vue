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
            // desc(){
            //     this.$store.commit('Desc', this.n)
            // },
            // 代替上面 传参在@click处
            ...mapMutations({desc:'DESC'}),
            // add(){
            //     this.$store.dispatch('add', this.n)
            // },
            // addOdd(){
            //     this.$store.dispatch('addOdd', this.n)
            // },
            // addWait(){
            //     this.$store.dispatch('addWait', this.n)
            // },
            // 代替上面 传参在@click处
            ...mapActions(['add', 'addOdd', 'addWait'])
          },
          computed:{
              /**11 靠自己取state中的值**************/
            //   sum(){
            //       return this.$store.state.sum
            //   },
            //   name(){
            //       return this.$store.state.name
            //   },
            //   address(){
            //       return this.$store.state.address
            //   },
              /**22 借助mapState取state中的值,取代11**************/
              // {...{}}将里面对象中的内容依次取出添加到外部对象
            //   ...mapState({sum:'sum',name:'name',address:'address'}),
              /**33 名字一致22处可以简写为下main**************/
              ...mapState(['sum','name','address', 'personList']),

              /**111 靠自己取getter中的值**************/
            //   bigSum(){
            //       return this.$store.getters.bigSum
            //   },
            /**222 借助mapGetters取getter中的值,取代111**************/
              ...mapGetters(['bigSum']),
          },
      }
  </script>