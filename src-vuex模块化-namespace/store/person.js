import axios from 'axios'

export default {
    namespaced: true,
    actions:{
        getSentence(context){
            console.log('getSentence被调用了');
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('GET_SENT_SUCCESS',response.data)
                },
                error=>{
                    context.commit('GET_SENT_FAIL',error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state, param){
            state.personList.unshift(param)
        },
        GET_SENT_SUCCESS(state, param){
            console.log('GET_SENT_SUCCESS被调用了', param);
            state.sentence = param
        },
        GET_SENT_FAIL(state, param){
            state.sentence = param
        }
    },
    state:{
        personList: [
            {
                id:'001',
                name: '张三'
            },
        ],
        sentence:''
    },
    getters:{
        firstPerson(state){
            return state.personList[0]
        }
    }
}