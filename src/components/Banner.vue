<template>
    <div id="banner-root">
        <div id="nav">
            <router-link  v-for="(banner, index) in banners" :key="index" 
                active-class="active"
                :to="banner.path">{{banner.title}}</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Banner',
        data() {
            return {
                banners:[
                    {
                        title:'News1',
                        path:'/news/news1'
                    },
                    {
                        title:'News2',
                        path:'/news/news2'
                    },
                ]
            }
        },
        // props:['navs']
    }
</script>
<style lang="css" scoped>
    #banner-root{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: azure;
    }
    #nav{
        display: flex;
        width: 100%;
        
    }
</style>