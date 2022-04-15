<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 ref="title">vue学习 插槽slot</h2>
    <div class="cate">
      <!-- 简单插槽 -->
      <Category cateName="美食">
        <img src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="">
        <a slot="slotName" href="http://www.baidu.com">更多</a>
      </Category>
      <Category cateName="游戏" :listData="games">
        <span></span>
        <div slot="slotName">
          <a href="http://www.baidu.com">单机</a>
          <a href="http://www.baidu.com">网络</a>
        </div>
      </Category>
      <Category cateName="电影" :listData="movies">
        <span></span>
        <template slot="slotName">
          <div>
            <a href="http://www.baidu.com">经典</a>
            <a href="http://www.baidu.com">热门</a>
            <a href="http://www.baidu.com">推荐</a>
          </div>
          <h4>欢迎观影</h4>
        </template>
      </Category>
    </div>
    <!-- 作用域插槽 -->
    <div class="cate">
      <CategoryWithData  cateName="游戏">
        <template  slot-scope>
          <ul>
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
          </ul>
        </template>
      </CategoryWithData>
      <CategoryWithData  cateName="游戏">
        <template  slot-scope>
          <ol>
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
          </ol>
        </template>
      </CategoryWithData>
      <CategoryWithData  cateName="游戏">
        <template  slot-scope>
          <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
        </template>
      </CategoryWithData>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Category from './components/Category'
  import CategoryWithData from './components/CategoryWithData'
    export default {
        name: 'App',
        data() {
          return {
            foods:['火锅', '烧烤', '牛排', '小龙虾'],
            games:['王者荣耀', 'lol', '红警', '俄罗斯方块'],
            movies:['你好，李焕英', '教父', '我不是药神', '霍元甲']
          }
        },
        components:{Category, CategoryWithData},
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
  .cate{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
</style>
