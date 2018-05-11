import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

// 接口模拟，实际开发请勿导入
import './mock'

Vue.config.productionTip = false;

// 免登录校验白名单，名单内路由，拦截器不予拦截
const whiteList = [ '/login' ];

// 路由拦截器
router.beforeEach((to, from, next) => {
    next();
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
