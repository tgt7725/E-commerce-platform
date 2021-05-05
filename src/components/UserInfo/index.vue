<template>
    <div class="user-info-container">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
        >
            <el-form-item label="用户名" prop="username" :required="isEditing">
                <el-input
                    v-model="ruleForm.username"
                    :disabled="!isEditing"
                ></el-input>
            </el-form-item>
            <el-form-item label="用户邮箱" prop="email">
                <el-input v-model="ruleForm.email" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户角色" prop="role">
                <el-radio-group v-model="ruleForm.role" disabled>
                    <el-radio label="admin">管理员用户</el-radio>
                    <el-radio label="coustomer">普通用户</el-radio>
                </el-radio-group>
            </el-form-item>
            <template v-if="isEditing">
                <el-form-item label="密码" prop="password" required>
                    <el-input
                        type="password"
                        v-model="ruleForm.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <div class="find_password">
                    <router-link :to="{ name: 'FindPass' }"
                        >找回密码</router-link
                    >
                </div>
                <el-form-item label="新密码" prop="newPassword">
                    <el-input
                        type="password"
                        v-model="ruleForm.newPassword"
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
            </template>

            <el-form-item>
                <el-button
                    type="primary"
                    @click="isEditing = true"
                    v-if="!isEditing"
                    >修改</el-button
                >
                <!-- <el-button v-else type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
                <el-button
                    v-else
                    :disabled="loading"
                    type="primary"
                    @click="submitForm('ruleForm', handleSubmit)"
                    >{{ loading ? "提交中" : "提交" }}</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import vaildateInput from "@/mixins/vaildateInput.js";
import { changeUserInfo } from "@/api/editUser";
import Cookies from "js-cookie";
export default {
    mixins: [vaildateInput()],
    async created() {
        const user = await this.$store.dispatch("loginUser/whoAmI");
        this.ruleForm.username = user.username;
        this.ruleForm.email = user.email;
        this.ruleForm.role = user.role;
    },
    data() {
        return {
            isEditing: false,
        };
    },
    methods: {
        async handleSubmit() {
            this.ruleForm.newPassword = this.ruleForm.newPassword
                ? this.ruleForm.newPassword
                : this.ruleForm.password;
            const res = await changeUserInfo(this.ruleForm);
            if (res.status === "success") {
                this.$message.success(res.msg);
                Cookies.set("username", this.ruleForm.username, { expires: 3 });
                await this.$store.dispatch("loginUser/whoAmI");
                this.isEditing = false;
                this.ruleForm.password = "";
                this.ruleForm.newPassword = "";
                this.ruleForm.code = "";
            } else {
                this.$message.warning(res.msg);
            }
        },
    },
};
</script>

<style lang="less" scoped>
.user-info-container {
    width: 700px;
    border: 1px solid #eee;
    padding: 20px;
    margin: 10px auto 0;

    .find_password {
        position: relative;
        text-align: right;
        top: -10px;
        font-size: 14px;
        text-decoration: underline;
    }
}
</style>