<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 ref="title">学习vue请求数据 axios</h2>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: 'App',
        methods: {
          getStudents(){
            axios.get('http://localhost:8081/api1/students').then(
              response=>{
                console.log('请求数据：', response.data);
              },
              error=>{
                console.log('请求失败 ', error.message);
              }
            )
          },
          getCars(){
            axios.get('http://localhost:8081/api2/cars').then(
              response=>{
                console.log('请求数据：', response.data);
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
