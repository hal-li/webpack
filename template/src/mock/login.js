/**
 * 模拟后台接口，随机生成token字符串、根据token校验登录是否有效并返回用户信息
 * */
import * as unit from "@common/unit.service"

const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';

const userMap = {
    admin: {
        token: "",
        password: "111111",
        nickname: "管理员",
        introduction: "我是管理员"
    }
};

function responseError(message) {
    return Object.assign({ message }, {
        data: null,
        status: 0
    })
}

function responseSuccess(data) {
    return Object.assign({ data }, {
        status: 1,
        message: "请求成功"
    })
}

// config => { body: object, url: string, method: string }
export default {
    login: config => {
        // 获取body中的参数，因为请求前序列化参数，后台捕捉到是参数序列化字符串，这里需要反序列化
        let { username, password } = unit.deserialize(config.body);
        // 判断用户是否存在，不在请求失败
        if(!userMap.hasOwnProperty(username))
            return responseError("找不到该用户");
        if(password !== userMap[ username ].password)
            return responseError("您输入的密码有误");
        // 反之请求成功,返回随机字符串
        let data = userMap[ username ];
        for (let i = 0; i < 32; i++) {
            data.token += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return responseSuccess(data);
    },

    getUserInfo: config => {
        // 解析url,获取url上的token参数
        let userInfo = {};
        let { token } = unit.deserialize(config.url);
        Object.keys(userMap).forEach(username => {
            let user = userMap[ username ];
            if(token === user.token)
                userInfo = user;
        });
        return responseSuccess(userInfo);
    },

    logout: () => {

    }
}

