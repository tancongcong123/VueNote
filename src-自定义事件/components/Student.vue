<template>
    <!-- 组件结构 -->
    <div class="student">
        <h2 @click="sendName(name)">姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>性别：{{sex}}</h2>
    </div>
</template>
<script>
    export default {
        name: 'Student',// 最好和文件名保持一致
        data: function(){
            return {
            }
        },
        props: ['name', 'age', 'sex'],
        methods: {
            sendName(name){
                this.$emit('getData', name)
                // 解绑自定义事件
                // this.$off('getData') // 解绑一个事件
                // this.$off(['getData', 'a']) // 解绑多个事件
                // this.$off() // 解绑所有事件
            }
        },
    }
</script>
<style>
    /* 组件样式 */
    .student {
        background-color: antiquewhite;
    }
</style>