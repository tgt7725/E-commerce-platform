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
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                    >登录</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {login} from '@/api/user.js'
export default {
    data() {
        var checkEmail = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入邮箱"));
            } else {
                const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!reg.test(this.ruleForm.email)) {
                    callback(new Error("邮箱格式不正确"));
                }else {
                  callback();
                }
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                email: "",
                password: "",
            },
            rules: {
                password: [{ validator: validatePass, trigger: "blur" }],
                email: [{ validator: checkEmail, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const res = await login(this.ruleForm.email, this.ruleForm.password);
                    if(res.status === 'success') {
                      this.$message.success(res.msg);
                      this.$router.push('/');
                    }else {
                      this.$message.error(res.msg)
                    }
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>

<style>
</style>