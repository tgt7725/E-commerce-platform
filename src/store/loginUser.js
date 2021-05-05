import * as api from '@/api/loginUser.js'
export default {
    namespaced: true,
    state: {
        loading: false,
        loginUser: null,
        loginInfo: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setLoginUser(state, payload) {
            state.loginUser = payload;
        },
        setLoginInfo(state, payload) {
            state.loginInfo = payload;
        }
    },
    actions: {
        async login({ commit }, payload) {
            commit("setLoading", true);
            const res = await api.login(payload.email, payload.password);
            commit("setLoginUser", res.data);
            commit("setLoginInfo", {
                msg: res.msg,
                status: res.status
            });
            commit("setLoading", false);
        },
        async whoAmI({ commit }) {
            commit("setLoading", true);
            const res = await api.whoAmI();
            commit("setLoginUser", res);
            commit("setLoading", false);
            return res;
        },
        async loginOut({ commit }) {
            commit("setLoading", true);
            await api.loginOut();
            commit("setLoginUser", null);
            commit("setLoginInfo", null);
            commit("setLoading", false);
        }
    }
}

