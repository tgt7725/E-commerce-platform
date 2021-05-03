<template>
    <div class="login-container">
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="登录" name="first">
                <Login />
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
                <Register />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'
export default {
    components: {
        Login,
        Register
    },
    data() {
        return {
            activeName: "first",
        };
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.login-container {
    width: 426px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    padding: 20px;
}
</style>