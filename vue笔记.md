#### vue基础

    var app = new Vue(
        el: '#app',
        data: {}
    )
    1 new Vue 创建一个vue对象 相当于ViewModel，绑定data到view
    2 指定当前vue的容器 容器里面的代码被称为vue模板 View
    3 data指定容器中使用的数据 data
    ps：
        1 vue对象和容器是一对一的关系
    计算属性和监听事件
        1 计算属性中不能开启异步任务，监听事件中可以
        2 computed可以完成的，watch都可以，反之不一定
        ps
            1 所有被vue管理的函数最好写成普通函数，这样this的指向才能使vm或组件实例对象
            2 所有不被vue管理的方法（定时器，Ajax回调等），最好写成箭头函数，这样this的指向才能使vm或组件实例对象
    内置指令 
        事件修饰符
                prevent 阻止默认事件
                stop 阻止冒泡
                once 事件只触发一次
                capture 使用事件的捕获模式
                self 只有event.target是当前操作元素的时候才触发
                passive 默认事件立即执行，无需等待回调执行完毕
        v-text 向控件中覆盖写入文本，不能解析标签
        v-html 向控件中覆盖写入文本，能解析标签，不安全
        v-cloak 一旦vue接管页面，会删掉此属性，配合css display：none 可以改善网络慢的时候页面显示问题
        v-once 节点在初次动态渲染之后就视为静态内容了，之后数据更新不会引起所在结构的变化，用于优化性能
        v-pre 跳过其所在节点的编译过程，利用它跳过没有指令，没有插值语法的节点，会加快编译速度
    自定义指令 directives
        写法
            1 custom: {
                // 指令与元素成功绑定时 一上来
                bind(){},
                // 指令元素被插入到页面的时候
                inserted(){},
                // 指令元素所在模板被重新解析的时候
                update(){}
            }
                更加灵活
            2 big(element, bindingObj){}
                相当于只实现了写法1的bind和update
                方法写法调用时机：
                    1 指令与元素绑定时候
                    2 坐在模板被重新解析时候
        ps：1 this指向window
            2 写在new vue里面的是局部zhiling
            3 全局指令写法 Vue.directive('name', {})
    生命周期
        beforeCreate 初始化
        created 初始化数据监测，数据代理
        beforeMount 生成虚拟DOM，页面显示伪解析的页面
        mounted vue完成模板解析并把真实DOM元素放入页面后（挂载完毕）调用，只调用一次
        beforeUpdate
        updated
        ...
        beforeDestory
        destoryed
    组件
        应用
            步骤：
                1 定义组件--创建
                2 注册组件
                3 使用组件--标签使用
            如何定义一个组件
                使用Vue.extend(options)创建，和new vue时候传入的options几乎一样
                区别：
                    1 不设置el 组件定义时候不用配置el，最终所有的组件都会被一个vue实例管理
                    2 组件中data必须用函数式
                    3 使用template配置组件结构
            如何注册组件
                局部注册 new vue中配置components属性
                全局注册 Vue.component(name, component)
            组将命名
                一个单词 全部小写、首字母大写
                多个单词
                    每个单词小写，单词之间以-连接
                    每个单词首字母大写（需要Vue脚手架支持）
                组件标签使用
                    <school></school>
                    <my-school></my-school>
                    以下需要脚手架支持
                    <MySchool></MySchool>
                    <MySchool/>
                ps：组件配置了name的时候，开发者工具vue会显示name
        单文件组件
            运行需要通过
                1 webpack 编译后使用
                2 通过vue脚手架使用
            
        VueComponent 组件实例对象
            1 组件本质是一个名为VueComponent的构造函数，是Vue.extend生成的
            2 我们只需要写<school></school>，vue会帮我们创建school组建的实例对象
                即vue帮我们执行 new VueComponent(options)
            3 Vue.extend返回的是一个新的VueComponent
            4 this
                组件配置中this指向【VueComponent实例对象】
                new vue中配置中this指向vue实例对象
        一个重要的内置关系
            VueComponent.prototype.__proto__ === Vue.prototype
            这个关系让VueComponent实例对象可以访问到vue原型上面的属性、方法等
        props 接收外部数据
            外部传递数据
                <Student name="zong" sex="female" :age="7" />
            内部接受数据 3种写法
                1 props: ['name', 'sex', 'age']
                    只接收数据
                2 限制接收参数的类型
                    props: {
                        name: String,
                        sex: String,
                        age: Number
                    }
                    
                3 限制参数类型 必传 默认值属性（required和default不同时出现）
                    props: {
                        name: {
                            type: String,
                            required: true,
                        },
                        sex: {
                            type: String,
                            required: true,
                        },
                        age: {
                            type: Number,
                            default: 10,
                        }
                    }
            props是只读的，vue会监测对props属性的修改，会发出警告；如果确实需要对props内容进行修改，需要在data中复制一份，然后修改data中的数据
        mixin
            把多个组件公用的配置提取成一个混入对象
            使用
                局部 mixins: []
                全局 Vue.minxin()
        自定义事件
            一种组件间通信方式：适用于子组件给父组件传递数据
                父组件中给子组件绑定事件，回调在父组件中，子组件自己解绑事件
            绑定 再父组件中绑定
                第一种写法 通过v-on或@给子组件绑定自定义事件
                    <Student @getData="getSubName" name="zong" :age="7" sex="female" />
                第二种写法 通过ref给子组件绑定自定义事件 可以用于子组件往父组件传递数据 更加灵活
                    <Student ref="student" name="huan" :age="10" sex="male" />
                    this.$refs.student.$on('getData', this.getSubName)
            触发自定义事件 子组件中
                this.$emit('getData', name)
            解绑 在自身中解绑
                this.$off('getData') // 解绑一个事件
                this.$off(['getData', 'a']) // 解绑多个事件
                this.$off() // 解绑所有事件
            组件销毁后，自身绑定的自定义事件都失效了
            组件上也可以绑定原生DOM事件，但需要添加native修饰符 例如@click.native
                <Student ref="student" name="huan" :age="10" sex="male" @click.native="alert(11)" />
        全局事件总线
            任意组件间通信
            设置全局总线
                new Vue({
                    render: h => h(App),
                    beforeCreate(){
                        // 将vm作为数据中转的介质 全局数据总线
                        Vue.prototype.$eventBus = this
                    }
                }).$mount('#app')
            接收数据（组件销毁解绑事件）
                mounted() {
                    this.$eventBus.$on('getStudentName', (data)=>{
                        console.log('shcool收到了数据', data);
                    })
                },
                destroyed() {
                    this.$eventBus.$off('getStudentName')
                },
            发送数据
                this.$eventBus.$emit('getStudentName', this)
        消息的订阅和发布
            pubsub-js
        动画
            transition 适用与单个元素
            transition-group 适用于多个元素，列表
                (v默认开头 如果transition由name属性，以name开头)
                v-enter 进入的起点
                v-enter-to 进入的终点
                v-enter-active 进入触发
                v-leave 离开的起点
                v-leave-to 离开的终点
                v-leave-active 离开触发
            npm动画库 Animate.css
        插槽 复用组件
            普通插槽
            作用域插槽 数据在插槽内部
                使用时候 <template  slot-scope>是必须要加的
                <CategoryWithData  cateName="游戏">
                <template  slot-scope>
                <ol>
                    <li v-for="(item,index) in games" :key="index">{{item}}</li>
                </ol>
                </template>
            </CategoryWithData>
        vuex 专门在vue中实现集中状态（数据）管理的一个vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读写），
            也是组件间通信的一种方式，且适用于任意组件间通信
            https://github.com/vuejs/vuex
            什么情况下使用：
                1 多个组件使用同一个状态
                2 来自不同组件的行为需要变更同一个状态
            $store 管理者
                actions 用于响应组件中的动作 
                    调用$store.dispatch(name,value)
                    接收参数 context value
                        context是一个mini的store里面有
                            dispatch
                            commit
                            state
                mutations 用于操作数据（state）
                    调用($store/context).commit(name,value)
                    接收参数 context value
                        context里面有state
                state 用于存储数据
                getter 用于包装数据
            四个map方法
                mapState 用于映射state中的数据为计算属性
                mapGetters 用于映射getter中的数据为计算属性
                mapActions 用于帮助生成与actions对话的方法
                mapMutations 用于帮助生成与mutations对话的方法
            模块化+namespace
        组件间通信
            1 props
            2 全局事件总线
            3 消息订阅发布
            4 vuex
        vue-router
            vue的一个插件，实现spa应用，局部更新
                一个应用只有一个路由器 $router只有一个
                每个组件都有自己的路由属性，里面存储自己的路由信息
                通过切换，隐藏的路由组件默认是被销毁的，需要时再去挂载
            vue中借助router-link标签实现路由切换
                 借助router-view标签指定展现位置
            路由缓存
                <!-- 缓存路由组件 include指定缓存的路由页面组件名称 默认切换销毁 -->
                <!-- include="News2" 缓存单个 -->
                <!-- :include=["News1", "News2"] 缓存多个 -->
                <keep-alive include="News2">
                    <router-view style="width: 100%;height: 100%;"></router-view>
                </keep-alive>
            两个新的生命周期钩子
                被包含在 keep-alive 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated
                // 路由被激活 onResume
                activated() {
                    console.log('onResume');
                },
                // 路由失活 onPause
                deactivated() {
                    console.log('onPause');
                },
            路由守卫
                全局前置路由守卫 router.beforeEach
                全局后置路由守卫 router.afterEach
                独享路由守卫 beforeEnter 单个路由设置
                    beforeEnter:(to, _from, next)=>{
                        alert('没有权限不能查看-beforeEnter独享路由守卫')
                    }
                组件内路由守卫(示例在person组件内)
                    beforeRouteEnter (to, from, next) {
                        // 通过路由规则进入该组件时被调用
                    },
                    beforeRouteLeave (to, from, next) {
                        // 通过路由规则离开该组件时被调用
                    }
    vue ui组件库
        


#### 其他

    函数
        箭头函数没有自己的this，就会向上一级找
        ()函数有自己的this
    Object.defineProperty
        通过Object.defineProperty添加的属性可以控制属性的属性
            enumerable: true, //控制属性是否可以被枚举 默认false不能被枚举（不能遍历获取）
            writable: true, //控制是否可以修改 默认false
            configurable: true //控制属性是否可被删除 默认false
        get() set()
            动态获取数据
    数据代理
        通过一个对象代理对里一个对象中属性的操作（读/写 get/set）
            let obj1 = {x:100}
            let obj2 = {y:99}
            Object.defineProperty(obj2, 'x', {
                get(){
                    return obj1.x
                },
                set(value){
                    obj1.x = value
                }
            })
    template
        不产生新的节点 不影响结构 类似merge
        只能和v-if配合使用
    v-for中key的原理
        1 虚拟DOM中key的作用
            key是虚拟DOM对象的标识，当数据据发生变化时候，vue会根据新数据生成新的虚拟DOM，随后会进行【新虚拟DOM】和【旧的虚拟DOM】差异比较
        2 对比规则
            1 新旧之间key相同
                内容没变，就直接使用真实DOM
                内容变化，生成新的真是DOM随后替换页面的之前的真实DOM
            2 key不同
                创建新的真实DOM，渲染在页面上
        3 index作为key使用会引发的问题
            1 若对数据进行比较，会产生没有必要的真实DOM更新，导致效率低
            2 若数据中存在输入，会导致数据错乱
    $nextTick
    函数防抖和节流（解决函数卡顿问题）
        现象：事件频繁触发，每次触发函数都要执行，如果事件太短会导致卡顿
        解决：
            节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
            防抖：前面的触发都取消，最后一次执行，在规定时间之后才会触发，也就是说连续多次触发也只执行一次
            插件：lodash 封装了函数的防抖和节流的业务【闭包+延时器】
                防抖 _.debounce(func, time),
                节流 _.throttle(func, [wait=0], [options=])
    模拟数据 插件 mockjs
    图片懒加载插件 vue-lazyload
        https://www.npmjs.com/package/vue-lazyload
    https://github.com/PanJiaChen/vue-admin-template.git