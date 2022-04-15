<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 ref="title">vue学习 vuex</h2>
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
  import Count from './components/Count'
  import Person from './components/Person'
    export default {
        name: 'App',
        components:{
          Count,Person
        }
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
  button{
    margin-left: 10px;
  }
</style>
