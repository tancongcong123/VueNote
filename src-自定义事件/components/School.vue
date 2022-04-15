<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
    </div>
</template>
<script>
    export default {
        name: 'School',// 最好和文件名保持一致
        data: function(){
            return {
                schoolName: "课后万朋",
                schoolAddress: "杭州市滨江区",
            }
        },
    }
</script>
<style>
    /* 组件样式 */
    .demo {
        background-color: aliceblue;
    }
</style>