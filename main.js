import Vue from 'vue'
import App from './App'
// 挂载到全局，让每一个页面都能够使用
import {myRequest} from "util/api.js"
//让所有的页面都可以使用该方法
Vue.prototype.$myRuquest =myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
