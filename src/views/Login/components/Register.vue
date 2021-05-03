<template>
    <div class="register-input-container">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
        >
            <el-form-item label="用户名" prop="username" required>
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="用户邮箱" prop="email" required>
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
                    <el-col :span="16">
                        <el-input v-model="ruleForm.code"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button size="">获取验证码</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="用户角色" prop="role">
                <el-radio-group v-model="ruleForm.role">
                    <el-radio label="admin">管理员用户</el-radio>
                    <el-radio label="customer">普通用户</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                    >注册</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        var validateUserName = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        var checkEmail = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入邮箱"));
            } else {
                const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!reg.test(this.ruleForm.email)) {
                    callback(new Error("邮箱格式不正确"));
                } else {
                    callback();
                }
            }
        };
        var validateCode = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("验证码不能为空"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                username: "",
                password: "",
                email: "",
                code: "",
                role: "admin",
            },
            rules: {
                username: [{ validator: validateUserName, trigger: "blur" }],
                password: [{ validator: validatePass, trigger: "blur" }],
                email: [{ validator: checkEmail, trigger: "blur" }],
                code: [{ validator: validateCode, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message.success("注册成功");
                    console.log("注册成功", this.ruleForm);
                } else {
                    this.$message.error("表单有误，请认真校验");
                    return false;
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