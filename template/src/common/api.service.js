// 子系统接口常量定义
import config from './app.config';

let baseUrl = config.server.ip;

// 用户认证
export const auth = {
    login: '/login/login',                                                      // 登录
    logout: '/login/logout',                                                    // 登出
    getUserInfo: '/login/getUserInfo',                                          // 获取用户信息
};
