<template>
    <div>
        <!-- <h3>标题：{{$route.query.title}}</h3>
        <h4>内容：{{$route.query.content}}</h4> -->
        
        <h3>标题：{{title}}</h3>
        <h4>内容：{{content}}</h4>
        <h4>接收路由props:{{id}}</h4>
    </div>
</template>
<script>
    export default {
        name:'Detial',
        props:['id', 'title', 'content'],
        mounted() {
            console.log(this.$route);
        },
    }
</script>