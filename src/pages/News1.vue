<template>
    <div>
       <ul>
           <li v-for="news in newsList" :key="news.id">
                <!-- 路由跳转并携带参数 to的字符串写法 -->
                <!-- <router-link :to='`/news/news1/detial?id=${news.id}&title=${news.title}&content=${news.content}`'>{{news.title}}</router-link> -->
                
                <!-- 路由跳转并携带参数 to的对象写法 -->
                <!-- path: '/news/news1/detial', -->
                <!-- 当路由设置了name属性的时候，可以用name:'xiangqing'代替path: '/news/news1/detial'，可以简化内嵌路由写法 -->
                <!-- path/name+query  name+params -->
                <router-link :to="{
                        name:'xiangqing',
                        query:{
                            id:news.id,
                            title:news.title,
                            content:news.content
                        }
                    }">
                    {{news.title}}
                </router-link>   
                <!-- <router-link :to="{
                    name:'xiangqing',
                    params:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                }">
                    {{news.title}}
                </router-link>   -->
                <button @click='pushToDetial(news)'>push查看</button>
                <button @click='replaceToDetial(news)'>replace查看</button>
            </li>
       </ul>
       <router-view style="background-color: antiquewhite;"></router-view>
    </div>
</template>
<script>
    export default {
        name:'News1',
        data() {
            return {
                newsList:[
                    {id:'001', title:'title001', content:'content001',path:'/news/news1/detial'},
                    {id:'002', title:'title002', content:'content002',path:'/news/news1/detial'},
                    {id:'003', title:'title003', content:'content003',path:'/news/news1/detial'},
                    {id:'004', title:'title004', content:'content004',path:'/news/news1/detial'}
                ]
            }
        },
        methods: {
            // 脱离router-link,编程式路由导航
            pushToDetial(news){
                console.log(news);
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                })
            },
            replaceToDetial(news){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                })
            }
        },
    }
</script>
<style lang="css" scoped>
    ul li:nth-child(odd){
        background-color: aliceblue;
    }
</style>