<template>
    <div id="nav-root-vertical">
        <router-link  v-for="(nav, index) in navs" :key="index" 
        active-class="active"
            :to="nav.path">{{nav.title}}</router-link>
    </div>
</template>
<script>
    export default {
        name:'Nav',
        data() {
            return {
                navs:[
                    {
                        title:'Count',
                        path:'/count'
                    },
                    {
                        title:'Person',
                        path:'/person'
                    },
                    {
                        title:'News',
                        path:'/news'
                    },
                ]
            }
        },
        // props:['navs']
    }
</script>
<style lang="css" scoped>
    #nav-root-vertical{
        display: flex;
        flex-direction: column;
        background-color: aliceblue;
    }
</style>