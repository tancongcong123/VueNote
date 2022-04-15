import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    // 将vm作为数据中转的介质 全局数据总线
    Vue.prototype.$eventBus = this
  }
}).$mount('#app')
