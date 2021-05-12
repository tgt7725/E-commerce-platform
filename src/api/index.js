// tgt_1620009990870
import axios from 'axios'
import store from '@/store/loginUser'

const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/',
})

instance.interceptors.request.use(config => {
    if(config.url.startsWith("/passport")) {
        return config;
    }
    return {
        ...config,
        params: {
            ...config.params,
            appkey: store.state.loginUser.appkey
        }
    }
}, err => Promise.reject(err));

export default instance;