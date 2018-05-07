// 服务器配置，归属于服务器配置的，在以下各环境服务器中进行配置
const server =  {
    // 开发服务器
    dev: {
        ip: "http://192.168.10.252"
    },
    // 测试服务器
    test: {
        ip: "http://192.168.10.252",
    },
    // 上线服务器
    prod: {
        ip: "http://192.168.10.252"
    }
};

const globalConfig = {

    // 服务器配置
    server: server.dev,

    // 本地默认语言
    lang: "cn",

    // 请求超时时间
    timeout: 10 * 1000,
};

export default globalConfig;
