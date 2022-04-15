<template>
    <div class="cate-item-root">
        <h3>{{cateName}}分类</h3>
        <ul>
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
        </ul>
        <!-- 默认插槽 -->
        <slot>我是一个默认插槽，只有一个插槽的时候使用</slot>
        <!-- 具名插槽 -->
        <slot name="slotName">我是一个具名插槽，需要多个插槽的时候使用</slot>
    </div>
</template>
<script>
    export default {
        name:'Category',
        props:['cateName', 'listData']
    }
</script>
<style scoped>
    .cate-item-root{
        display: inline-block;
        width: 150px;
        height: 250px;
        background-color: aliceblue;
    }
    h3{
        text-align: center;
        background-color: orange;
        color: white;
    }
    li {
        text-align: left;
    }
    img{
        width: 100%;
    }
    .cate-item-root>div>a{
        margin-left: 10px;
    }
</style>