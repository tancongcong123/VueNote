<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
    </div>
</template>
<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School',// 最好和文件名保持一致
        data: function(){
            return {
                schoolName: "课后万朋",
                schoolAddress: "杭州市滨江区",
            }
        },mounted() {
            this.pubId = pubsub.subscribe('hello', (msgName, data)=>{
                console.log('有人发布hello消息，接收到hello消息:', msgName, data);
            })
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>
<style>
    /* 组件样式 */
    .demo {
        background-color: aliceblue;
    }
</style>