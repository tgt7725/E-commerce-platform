import * as api from '@/api/loginUser.js'
export default {
    namespaced: true,
    state: {
        loginUser: null,
        loginInfo: null
    },
    mutations: {
        setLoginUser(state, payload) {
            state.loginUser = payload;
        },
        setLoginInfo(state, payload) {
            state.loginInfo = payload;
        }
    },
    actions: {
        async login({ commit }, payload) {
            const res = await api.login(payload.email, payload.password);
            commit("setLoginUser", res.data);
            commit("setLoginInfo", {
                msg: res.msg,
                status: res.status
            });
        },
        async whoAmI({ commit }) {
            const res = await api.whoAmI();
            commit("setLoginUser", res);
            return res;
        },
        async loginOut({ commit }) {
            await api.loginOut();
            commit("setLoginUser", null);
            commit("setLoginInfo", null);
        }
    }
}

