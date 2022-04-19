<template>
    <div id="news-root">
        <Banner></Banner>
        <!-- 缓存路由组件 include指定缓存的路由页面组件名称 默认切换销毁 -->
        <!-- include="News2" 缓存单个 -->
        <!-- :include=["News1", "News2"] 缓存多个 -->
        <keep-alive include="News2">
            <router-view style="width: 100%;height: 100%;"></router-view>
        </keep-alive>
    </div>
</template>
<script>
    import Banner from '../components/Banner'
    export default {
        name:'News',
        components:{Banner},
    }
</script>