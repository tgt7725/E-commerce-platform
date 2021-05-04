import axios from './index.js'

/**
 * 注册接口
 * @param {Object} info 用户信息
 */
export async function registerUser(info) {
    const res = await axios.post("/passport/logon", info);
    // console.log(res);
    return res.data;
}