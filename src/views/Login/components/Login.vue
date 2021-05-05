<template>
    <div class="login-input-container">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
        >
            <el-form-item label="邮箱" prop="email" required>
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" required>
                <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <div class="find_password">
                <router-link :to="{ name: 'FindPass' }">找回密码</router-link>
            </div>
            <el-form-item>
                <!-- <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button> -->
                <el-button
                    :disabled="loading"
                    type="primary"
                    @click="submitForm('ruleForm', handleSubmit)"
                    >{{ loading ? "登录中" : "登录" }}</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import vaildateInput from "@/mixins/vaildateInput.js";
export default {
    mixins: [vaildateInput()],
    methods: {
        async handleSubmit() {
            await this.$store.dispatch("loginUser/login", {
                email: this.ruleForm.email,
                password: this.ruleForm.password,
            });
            if (this.$store.state.loginUser.loginInfo.status === "success") {
                this.$message.success(
                    this.$store.state.loginUser.loginInfo.msg
                );
                this.$router.push("/");
            } else {
                this.$message.error(this.$store.state.loginUser.loginInfo.msg);
            }
        },
    },
};
</script>

<style lang="less" scoped>
.find_password {
    position: relative;
    text-align: right;
    top: -10px;
    font-size: 14px;
    text-decoration: underline;
}
</style>