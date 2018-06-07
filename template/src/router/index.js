import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = (resolve) => {
    import('@pages/login').then((module) => {
        resolve(module);
    })
};

// 静态路由配置
export const constantRouterMap = [
    { path: '', redirect: '/login' },
    { path: '/login', component: Login },
];

// 默认导出静态路由，根据路由钩子，获取角色权限生成动态路由
export default new Router({
    // mode: 'history', // require service support
    routes: constantRouterMap
})

// 动态路由配置
export const asyncRouterMap = [
    // 访问未知路径，全部重定向到登录页，注意必须配置在动态路由最后
    { path: '*', redirect: '/login' }
];
