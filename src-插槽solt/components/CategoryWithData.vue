<template>
    <div class="cate-item-root">
        <h3>{{cateName}}分类</h3>
        <!-- 作用域插槽 -->
        <slot :games="games">我是一个作用域插槽</slot>
    </div>
</template>
<script>
    export default {
        name:'Category',
        data() {
            return {
                games:['王者荣耀', 'lol', '红警', '俄罗斯方块'],
            }
        },
        props:['cateName']
    }
</script>
<style scoped>
    .cate-item-root{
        display: inline-block;
        width: 150px;
        height: 250px;
        background-color: lightblue;
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