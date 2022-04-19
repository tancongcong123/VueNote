export default {
    namespaced: true, // 开启命名空间，是mapState生效的前提
    actions:{
        // context是一个miniStore
        add(context, value){
            context.commit('ADD', value)
        },
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
    },
    mutations:{
        ADD(state, param){
            state.sum += param
        },
        DESC(state, param){
            state.sum -= param
        },
    },
    state:{
        sum: 0,
        name: 'zong',
        address: 'zhejaing',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}