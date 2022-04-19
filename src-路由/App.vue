<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 ref="title">vue学习 路由 vue-router</h2>
    <div id="content">
      <Nav></Nav>
      <router-view style="width: 100%;"></router-view>
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav'
    export default {
        name: 'App',
        components:{
          Nav
        }
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  button{
    margin-left: 10px;
  }
  #content{
    display: flex;
    height: 600px;
  }
  #nav{
    width: 20%;
  }
  a{
    display: block;
    padding: 10px 10px;
    text-decoration: none;
    color: #333;
  }
  .active{
    color: white;
    background-color: lightskyblue;
  }
  ul{
        list-style: none;
        padding: 0;
    }
    ul>li{
        text-align: left;
        padding: 0;
    }
</style>
