import { login } from "../../api/auth"
import { setToken, getToken } from "@/common/user.service";

const user = {
    state: {
        token: getToken(),
    },

    mutations: {
        SET_AUTH_TOKEN: (state, token) => {
            state.token = token
        },
    },

    actions: {
        // 常规登录
        login({ commit }, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                login(userInfo.username, userInfo.password)
                    .then(response => {
                        const data = response.data;
                        const status = response.status;
                        if(status !== 1) {
                            return reject();
                        }
                        // 将token保存在全局变量中
                        setToken(data.token);
                        commit('SET_AUTH_TOKEN', data.token);
                        resolve();
                    }).catch(error => {
                    reject(error);
                })
            })
        },

        // 获取用户信息
        getUserInfo() {
            return new Promise((resolve, reject) => {
                // do something ...
                resolve();
            })
        }
    }
};

export default user;
