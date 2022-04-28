/* eslint-disable no-unused-vars */
// 对axios就行二次封装 参考git
import axios from 'axios';

// step1 利用axios对象的create方法创建一个axios实例对象
const requests = axios.create({
    // 配置
    baseURL:'/api', // 基础路径，发起请求的时候路径会以/api开头
    timeout: 5000, // 请求超时时间
})
// step2 请求拦截器：发起请求之前拦截，可以做一些操作，比如添加cookie等信息
requests.interceptors.request.use((config)=>{
    // config配置对象，里面有一个重要的属性headers
    return config
})
// step2 响应拦截器：请求响应之前拦截，可以做一些操作，比如处理错误等
requests.interceptors.response.use((res)=>{
    // 成功回调
    return res.data
}, (error)=>{
    // 失败回调
    return Promise.reject(new Error('failed'))
})

export default requests