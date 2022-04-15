<template>
    <div>
        <h2>人员列表</h2>
        <h3 style="color: red;">显示Count中的求和{{sum}}</h3>
        <input type="text" v-model="inputName">
        <button @click="addPerson">添加</button>
        <ul style="list-style: none;">
            <li v-for="(p,index) in persons" :key="index">{{p.name}}</li>
        </ul>
    </div>
</template>
<script>
    import {nanoid} from 'nanoid';
    export default {
        name:'Person',
        data() {
            return {
                inputName:''
            }
        },
        computed:{
            sum(){
                return this.$store.state.sum
            },
            persons(){
                return this.$store.state.personList
            }
        },
        methods: {
            addPerson(){
                if(this.inputName){
                    var p = {
                    id: nanoid(),
                    name: this.inputName
                    }
                    this.$store.commit('ADD_PERSON', p)
                    this.inputName = ''
                }else{
                    alert('输入不能为空')
                }
            }
        },
    }
</script>