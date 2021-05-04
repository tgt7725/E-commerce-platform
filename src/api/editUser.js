import axios from './index.js'

export async function findPass(info){
    const res = await axios.post('/passport/findBack', info);
    // console.log(res);
    return res.data

}
export async function changeUserInfo(info){
    const res = await axios.put('/passport/changeUserInfo', info);
    // console.log(res);
    return res.data

}