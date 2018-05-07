import Vue from 'vue'

import App from './App'
import router from './router'
import api from './common/api.service';
import http from './common/http.service';

// 自定义的http全局实例
Vue.use(http, { });

Vue.config.productionTip = false;

// 挂载全局常量
Vue.prototype.$api = api;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
