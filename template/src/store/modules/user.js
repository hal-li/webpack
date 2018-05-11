import { login, getUserInfo, logout } from "../../api/auth"
import { setToken, getToken, removeToken } from "@/common/user.service";

const user = {
    state: {
        token: getToken(),
        userInfo: null,
    },

    mutations: {
        SET_AUTH_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
        }
    },

    actions: {
        // 常规登录
        login({ commit }, userInfo) {
            const username = userInfo.username.trim();
            const password = userInfo.password;
            return new Promise((resolve, reject) => {
                login(username, password)
                    .then(response => {
                        const data = response.data;
                        const status = response.status;
                        if(status !== 1) {
                            return reject(response.message);
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
        getUserInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(response => {
                    const data = response.data;
                    const status = response.status;
                    if(status !== 1) {
                        return reject();
                    }
                    commit('SET_USER_INFO', data);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },

        // 退出登录，清空缓存
        logout({ commit }) {
            return new Promise((resolve) => {
                logout().then(() => {
                    commit('SET_AUTH_TOKEN', '');
                    commit('SET_USER_INFO', null);
                    removeToken();
                    resolve();
                })
            })
        },
    }
};

export default user;
