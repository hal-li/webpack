import Mock from 'mockjs'
import loginAPI from './login'

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.login);
Mock.mock(/\/login\/getUserInfo/, 'post', loginAPI.getUserInfo);

export default Mock
