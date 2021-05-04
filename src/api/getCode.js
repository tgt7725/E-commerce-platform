import axios from './index.js'

/**
 * 获取验证码
 * @param {String} email 邮箱
 */
export async function getCode(email) {
    const res = await axios.post("/passport/getCode", {email});
    // console.log(res);
    return res.data;
}