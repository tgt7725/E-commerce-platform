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
                    <el-col :span="15">
                        <el-input v-model="ruleForm.code"></el-input>
                    </el-col>
                    <el-col :span="9">
                        <el-button size="" @click="handleGetCode" :disabled="isSendCode"
                            >{{btnText}}</el-button
                        >
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="用户角色" prop="role">
                <el-radio-group v-model="ruleForm.role">
                    <el-radio label="admin">管理员用户</el-radio>
                    <el-radio label="coustomer">普通用户</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <!-- <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button> -->
                <el-button
                    :disabled="loading"
                    type="primary"
                    @click="submitForm('ruleForm', handleSubmit)"
                    >{{ loading ? "注册中" : "注册" }}</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { registerUser } from "@/api/registerUser";
import vaildateInput from '@/mixins/vaildateInput.js'
export default {
    mixins: [vaildateInput()],
    created() {
        this.ruleForm.role = "admin";
    },
    methods: {
        async handleSubmit(){
            const res = await registerUser(this.ruleForm);
            if(res.status === 'success') {
                this.$message.success(res.msg);
                this.$emit('login');
            }else {
                this.$message.warning(res.msg);
            }
        },
    },
};
</script>

<style>
</style>