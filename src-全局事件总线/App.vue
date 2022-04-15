<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 ref="title">学习vue</h2>
    <School/>
    <hr>
    <Student name="zong" :age="7" sex="female" />
    <Student name="huan" :age="10" sex="male" />
  </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'
    export default {
        name: 'App',
        components: {
            School,
            Student
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
