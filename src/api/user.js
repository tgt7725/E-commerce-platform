import axios from './index.js'
import Cookies from 'js-cookie';

const keys = ['username', 'email', 'appkey', 'role'];

/**
 * 用户登录
 * @param {String} email 邮箱
 * @param {String} password 密码
 */
export async function login(email, password) {
    const { data } = await axios.post('/passport/login', {
        email,
        password
    });
    if(data.status === 'success') {
        const arr = Object.entries(data.data)
        for (const item of arr) {
            keys.push(item[0]);
            Cookies.set(item[0], item[1], { expires: 3 });
        }
    }
    return data;
}

/**
 * 获取当前的用户信息，用于维护登录状态
 * @returns 返回用户信息
 */
export function whoAmI() {
    const appkey = Cookies.get("appkey");
    if(!appkey) {
        return null;
    }
    const obj = {};
    for (const key of keys) {
        obj[key] = Cookies.get(key);
    }
    return obj;
}

/**
 * 退出登录
 */
export function loginOut() {
    for (const key of keys) {
        Cookies.remove(key);
    }
    return true;
}