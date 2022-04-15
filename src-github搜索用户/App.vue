<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 ref="title">github用户搜索</h2>
    <div>
      <input type="text" v-model="searchKey">
      <button @click="searchUsers">search</button>
    </div>
    <Users :users="users" />
  </div>
</template>

<script>
  import axios from 'axios'
  import Users from './components/Users'
    export default {
        name: 'App',
        data() {
          return {
            searchKey:'',
            users:[]
          }
        },
        components:{Users},
        methods: {
          searchUsers(){
            axios.get('https://api.github.com/search/users?q='+this.searchKey).then(
              response=>{
                // console.log('请求数据：', response.data);
                this.users = response.data.items;
              },
              error=>{
                console.log('请求失败 ', error.message);
              }
            )
          }
        },
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
