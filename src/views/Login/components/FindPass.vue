<template>
    <div class="findPass-input-container">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
        >
            <div class="title">找回密码</div>
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
            <el-form-item label="验证码" prop="code" required>
                <el-row>
                    <el-col :span="15">
                        <el-input v-model="ruleForm.code"></el-input>
                    </el-col>
                    <el-col :span="9">
                        <el-button
                            size=""
                            @click="handleGetCode"
                            :disabled="isSendCode"
                            >{{ btnText }}</el-button
                        >
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <!-- <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
                <el-button type="primary" @click="submitForm('ruleForm', handleSubmit)">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import vaildateInput from "@/mixins/vaildateInput.js";
import { findPass } from "@/api/editUser";
export default {
    mixins: [vaildateInput()],
    methods: {
        async handleSubmit() {
            const res = await findPass(this.ruleForm);
            if (res.status === "success") {
                this.$message.success(res.msg);
                this.$store.dispatch("loginUser/loginOut");
                this.$router.push("/login");
            } else {
                this.$message.warning(res.msg);
            }
        },
    },
};
</script>

<style lang="less" scoped>
.findPass-input-container {
    width: 426px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    padding: 20px;

    .title {
        text-align: center;
        margin-bottom: 20px;
    }
    .find_password {
        display: block;
        position: relative;
        text-align: right;
        top: -10px;
        font-size: 14px;
        text-decoration: underline;
    }
}
</style>