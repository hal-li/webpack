/**
 * 认证模块，涉及登录登出、用户信息、用户信息设置等相关业务
 * */
import { auth } from "@common/api.service";
import http from "@common/http.service";

export function login(username, password) {
    return http.post(auth.login, {
        username: username,
        password: password
    })
}

export function getUserInfo() {
    return http.post(auth.getUserInfo)
}

export function logout() {
    return http.post(auth.logout)
}
