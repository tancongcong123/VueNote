import Vue from 'vue'
import Vuex from 'vuex'
// vue使用插件
Vue.use(Vuex)
// 用于创建vuex中的store
// 用于响应组件中的动作
const actions = {
    // context是一个miniStore
    add(context, value){
        context.commit('ADD', value)
    },
    // desc(context, value){
    //     context.commit('Desc', value)
    // },
    addOdd(context, value){
        if (context.state.sum % 2) { // 0转成布尔值为false
            context.commit('ADD', value)
        }
    },
    addWait(context, value){
        setTimeout(() => {
            context.commit('ADD', value)
          }, 1000);
    }
}
// 用于操作数据（state）
const mutations = {
    ADD(state, param){
        state.sum += param
    },
    DESC(state, param){
        state.sum -= param
    },
    ADD_PERSON(state, param){
        state.personList.unshift(param)
    }
}
// 用于存储数据
const state = {
    sum: 0,
    name: 'zong',
    address: 'zhejaing',
    personList: [
        {
            id:'001',
            name: '张三'
        },
    ]
}
// 加工数据 不改变原数据
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    // ...
    actions,
    mutations,
    state,
    getters
})