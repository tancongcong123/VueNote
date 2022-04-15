<template>
    <div>
       <ul>
           <li>new2 message001 <input type="text"></li>
           <li>new2 message002 <input type="text"></li>
           <li>new2 message003 <input type="text"></li>
           <li>new2 message004 <input type="text"></li>
       </ul> 
    </div>
</template>
<script>
    export default {
        name:'News2',
        // 路由组件独有的生命周期
        // 路由被激活 onResume
        activated() {
            console.log(this.$store.getters['persons/firstPerson']);
        },
        // 路由失活 onPause
        deactivated() {
            console.log('onPause');
        },
    }
</script>
<style lang="css" scoped>
    ul>li{
        padding: 10px;
    }
</style>