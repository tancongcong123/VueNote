/* eslint-disable no-unused-vars */
// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"

import Home from "../pages/HomePage"
import Center from "../pages/Center"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Search from "../pages/Search"

// 屏蔽重复路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, resolve, reject) {
    if(resolve && reject){
        // call和apply的对比
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call传递参数是用逗号隔开
        //     apply传递数组
        originalPush.call(this)
    }else{
        originalPush.call(this, location).catch(err => err)
    }
}

const router = new VueRouter({
    // 路由器的工作模式 
    // 默认hash 路径中存在# 
    mode:'hash',
    routes:[
        // 一级路由 path前面需要 /
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{title:'首页'}
        },
        {
            path:'/center',
            component:Center,
            meta:{title:'个人中心'}
        },
        {
            name:'login',
            path:'/login',
            component:Login,
            meta:{title:'登录'}
        },
        {
            name:'register',
            path:'/register',
            component:Register,
            meta:{title:'注册'}
        },
        {
            path:'/search/:keyword?',
            component:Search,
            meta:{title:'登录'}
        },
        // 重定向 访问/定向到首页
        {
            path:'*', 
            redirect:'/home'
        }
    ]
})

/*********************全局前置路由守卫 每次路由跳转之前的检查**************************************************/
/**通过匹配路径或名字拦截************/ 
// router.beforeEach((to, from, next)=>{
//     if(to.path==='/news/news1'){
//         // if(){
            
//         // }
//         alert('没有权限不能查看-匹配路径或名字')
//         return
//     }
//     next()
// })
/**通过路由meta配置拦截************/ 
router.beforeEach((to, _from, next)=>{
    if(to.meta.isAuth){
        // if(){
            
        // }
        alert('没有权限不能查看-路由meta配置')
        return
    }
    next()
})
/*********************全局后置路由守卫 初始化的时候、每次路由切换之后调用*******************************************/
// 用的比较少，可以用于页面加载之后的操作 如修改页面标题
router.afterEach((to, _from)=>{
    document.title = to.meta.title?to.meta.title:'学习vue'
})

export default router