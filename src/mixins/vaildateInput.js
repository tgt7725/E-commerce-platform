import { getCode } from "@/api/getCode";
import { mapState } from "vuex";
export default function () {
    return {
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
                    email: "",
                    password: "",
                    newPassword: "",
                    code: "",
                    role: "",
                },
                rules: {
                    username: [{ validator: validateUserName, trigger: "blur" }],
                    password: [{ validator: validatePass, trigger: "blur" }],
                    email: [{ validator: checkEmail, trigger: "blur" }],
                    code: [{ validator: validateCode, trigger: "blur" }],
                },
                isSendCode: false,
                btnText: '获取验证码',
            }
        },
        computed: {
            ...mapState("loginUser", ["loading"]),
        },
        methods: {
            submitForm(formName, callback) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.$store.commit('loginUser/setLoading', true);
                        await callback();
                        this.$store.commit('loginUser/setLoading', false);
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            async handleGetCode() {
                if (this.isSendCode) {
                    return;
                }
                const res = await getCode(this.ruleForm.email);
                if (res.status === "success") {
                    this.$message.success("验证码发送成功");
                    this.isSendCode = true;
                    let count = 20;
                    const timer = setInterval(() => {
                        if (count === 0) {
                            clearInterval(timer);
                            this.isSendCode = false;
                        }
                        this.btnText =
                            "获取验证码" + (count ? `(${count--}s)` : "");
                    }, 1000);
                } else {
                    this.$message.error(res.msg);
                }
            },
        },
    }
}