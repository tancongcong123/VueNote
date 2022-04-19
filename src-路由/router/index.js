/* eslint-disable no-unused-vars */
// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
import Count from '../pages/Count';
import Person from '../pages/Person';
import News from '../pages/News';

import News1 from '../pages/News1';
import News2 from '../pages/News2';
import Detial from '../pages/Detial';

const router = new VueRouter({
    //路由器的工作模式 
    // 默认hash 路径中存在# 
    mode:'hash',
    routes:[
        // 一级路由 path前面需要 /
        {
            path:'/count',
            component:Count,
            meta:{title:'计算'}
        },
        {
            path:'/person',
            component:Person,
            meta:{title:'人员显示'}
        },
        {
            path:'/news',
            component:News,
            meta:{title:'新闻首页'},
            // 子路由 path前面不需要 /
            children:[
                {
                    path:'news1',
                    component:News1,
                    meta:{title:'新闻页1', isAuth:true},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detial',
                            component:Detial,
                            // 路由的props第一种写法 传递的是固定的值
                            // props:{key1:'hello'}
                            
                            // 路由的props第二种写法 甚至为true表示该路由会把收到的所有params参数，以props的形式传递给News1组件
                            // props:true ？？？目前测试之第一次有效 切换组件不生效 后续再看一下
                            
                            // 路由的props第三种写法
                            props($route){
                                return {id:$route.query.id, title:$route.query.title, content:$route.query.content}
                            }
                            // 第三种写法的简写 解构赋值 连续解构
                            // props({query:{id,title,content}}){
                            //     return {id, title, content}
                            // }
                        }
                    ]
                },
                {
                    path:'news2',
                    component:News2,
                    meta:{title:'新闻页2'},
                    beforeEnter:(to, _from, next)=>{
                        alert('没有权限不能查看-beforeEnter独享路由守卫')
                    }
                }
            ]
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
    console.log('全局后置路由守卫');
    document.title = to.meta.title?to.meta.title:'学习vue'
})

export default router