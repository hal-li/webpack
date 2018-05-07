// 子系统接口常量定义
import config from './app.config';

let baseUrl = config.server.ip;

// 客户中心
export const userCenter = {
    login: baseUrl + '/login',                                     // 登录
};

export default {
    userCenter
};
