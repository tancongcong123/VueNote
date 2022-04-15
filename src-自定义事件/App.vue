<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 ref="title" @click="showTitle">学习vue</h2>
    <School/>
    <hr>
    <!-- 自定义事件 -->
    <!-- 第一种写法 通过v-on或@给子组件绑定自定义事件 可以用于子组件往父组件传递数据-->
    <Student @getData="getSubName" name="zong" :age="7" sex="female" />
    <!-- 第二种写法 通过ref给子组件绑定自定义事件 可以用于子组件往父组件传递数据 更加灵活-->
    <Student ref="student" name="huan" :age="10" sex="male" @click.native="alert(11)" />
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
        methods: {
            getSubName(name){
                console.log('收到了name='+name);
            },
            showTitle(){
                console.log(this);
            },
            alert(){
              alert(111);
            }
        },
        mounted() {
            console.log(this.$refs.title);
            console.log(this.$refs.student);
            this.$refs.student.$on('getData', this.getSubName)
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
