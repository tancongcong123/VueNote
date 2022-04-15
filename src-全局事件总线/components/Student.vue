<template>
    <!-- 组件结构 -->
    <div class="student">
        <h2 @click="sendName">姓名：{{name}}</h2>
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
            sendName(){
                this.$eventBus.$emit('getStudentName', this)
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