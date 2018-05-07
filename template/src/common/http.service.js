import axios from 'axios'

import config from '@common/app.config'
import util from '@common/unit.service'

// 默认配置
let defaultOptions = {
    // 基础服务器地址
    baseURL: config.server.ip,

    // 在向服务器发送前，序列化请求参数 { key: value, key2: value2 } => key=value&key2=value2
    transformRequest: [ util.transform ],

    // 返回数据传入then/catch之前进行处理
    transformResponse:[
        data => {
            //依需要对数据进行处理
            return data;
        }],

    // 请求头配置
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },

    // 超时时间
    timeout: config.timeout,

    // 表示跨域请求时是否需要使用凭证 默认 - false
    withCredentials: true,

    //返回数据类型
    responseType: 'json'
};

// 初始化axios实例
let instance = axios.create(defaultOptions);

// 自定义axios实例默认值，此处会覆盖上面的配置
instance.defaults.cache = false;
instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        let data = response.data;
        return Promise.resolve(data);
    },
    error => {
        return Promise.reject(error);
    });

// 定义暴露的实例方法
let http = {};

// 五种常规请求方式，options或requestConfig不为空，该处请求的配置优先级最高
http.get = (url, data, options = {}) => {
    let requestConfig = Object.assign({ params: data }, options);
    return instance.get(url, requestConfig);
};

http.delete = (url, data, options = {}) => {
    let requestConfig = Object.assign({ params: data }, options);
    return instance.delete(url, requestConfig)
};

http.post = (url, data, requestConfig = {}) => {
    return instance.post(url, data, requestConfig);
};

http.put = (url, data, requestConfig = {}) => {
    return instance.put(url, data, requestConfig);
};

http.patch = (url, data, requestConfig = {}) => {
    return instance.patch(url, data, requestConfig);
};

export default http;
