<template>
  <div id="app">
    <h2>this is root view</h2>
    <a-button type="primary" @click="toHome">Home</a-button>
    <Button type="primary" @click="toLogin">login</Button>
    <Button @click="toSinup">register</Button>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
          
          toHome(){
            this.$router.push('home')
          },
          toLogin(){
            this.$router.push('login')
          },
          toSinup(){
            this.$router.push('register')
          }
        },
    }
</script>

<style>
  *{
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
