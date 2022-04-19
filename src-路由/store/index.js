import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count.js'
import personOptions from './person.js'
// vue使用插件
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    // ...
    modules:{
        count: countOptions,
        persons: personOptions
    }
})