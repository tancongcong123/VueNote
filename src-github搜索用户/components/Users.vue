<template>
    <div class="user-root">
        <UserItem v-for="user in users" :key="user.id" :user='user'/>
    </div>
</template>
<script>
    import UserItem from './UserItem';
    export default {
        name:'Users',
        props: ['users'],
        components:{UserItem}
    }
</script>
<style>
    .user-root{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>