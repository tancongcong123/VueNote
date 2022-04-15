<template>
    <div class="user-item-root">
        <a :href="user.html_url">
            <div>
                <img :src="user.avatar_url" alt="">
            </div>
            <span>{{user.login}}</span>
        </a>
    </div>
</template>
<script>
    export default {
        name:'UserItem',
        props:['user']
    }
</script>
<style scoped>
    .user-item-root{
        border-radius: 5px;
        border: 1px #e4e4e4 solid;
        margin: 10px;
    }
    a{
        display: inline-block;
        text-decoration: none;
        color: #333333;
        text-align: center;
        background-color: aliceblue;
    }
    img{
        width: 60px;
        height: 60px;
        margin: 10px;
    }
</style>