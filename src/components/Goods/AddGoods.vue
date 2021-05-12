<template>
    <div class="add-goods-container">
        <div class="step-container">
            <el-steps :active="active" finish-status="success" align-center>
                <el-step title="填写商品基本信息"></el-step>
                <el-step title="填写商品销售信息"></el-step>
            </el-steps>
        </div>
        <div class="goods-info-container">
            <div
                class="goods-info goods-info-1"
                :class="{ hidden: active !== 0 }"
            >
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm1"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="商品名称" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="商品描述" prop="desc">
                        <el-input v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="商品类目" prop="category">
                        <el-select
                            v-model="ruleForm.category"
                            placeholder="请选择类目"
                        >
                            <el-option
                                v-for="item in categories"
                                :key="item._id"
                                :label="item.name"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品标签" prop="tags">
                        <el-select
                            v-model="ruleForm.tags"
                            multiple
                            filterable
                            allow-create
                            placeholder="请选择标签"
                        >
                            <el-option
                                v-for="item in tags"
                                :key="item"
                                :label="item"
                                :value="item"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="next"
                            >下一步</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
            <div
                class="goods-info goods-info-2"
                :class="{ hidden: active !== 1 }"
            >
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm2"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="预售价格" prop="price">
                        <el-input v-model.number="ruleForm.price"></el-input>
                    </el-form-item>
                    <el-form-item label="折扣价格" prop="price_off">
                        <el-input v-model.number="ruleForm.price_off"></el-input>
                    </el-form-item>
                    <el-form-item label="库存量" prop="inventory">
                        <el-input v-model="ruleForm.inventory"></el-input>
                    </el-form-item>
                    <el-form-item label="计量单位" prop="unit">
                        <el-input v-model="ruleForm.unit"></el-input>
                    </el-form-item>
                    <el-form-item label="是否上架" prop="status">
                        <el-radio-group v-model="ruleForm.status">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="商品图片" prop="images">
                        <el-upload
                            :action="
                                'http://mallapi.duyiedu.com/upload/images?appkey=' +
                                ($store.state.loginUser.loginUser
                                    ? $store.state.loginUser.loginUser.appkey
                                    : '')
                            "
                            list-type="picture-card"
                            :file-list="fileList"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-success="handleSuccess"
                            name="avatar"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="active--"
                            >上一步</el-button
                        >
                        <el-button
                            type="success"
                            @click="handleSubmit"
                            v-loading="loading"
                            >提交</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import * as goods from "@/api/goods.js";
import fetchData from "@/mixins/fetchData.js";
import goodsInfo from "@/mixins/goodsInfo.js";
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}
export default {
    mixins: [fetchData(), goodsInfo()],

    data() {
        return {
            active: 0,
            ruleForm: {
                price: "",
                unit: "",
                inventory: "",
                price_off: "",
            },
            rules: {
                price_off: [
                    {
                        required: true,
                        message: "商品折扣价格不能为空",
                        trigger: "blur",
                    },
                ],
            },
            fileList: [],
        };
    },

    methods: {
        next() {
            this.$refs["ruleForm1"].validate((valid) => {
                valid && this.active++;
            });
        },

        async handleSubmit() {
            this.$refs["ruleForm2"].validate(async (valid) => {
                if (valid) {
                    await this.fetchData(
                        goods.addGoods,
                        this.ruleForm,
                        "添加商品成功",
                        "添加商品失败"
                    );
                    this.active = 0;
                    this.fileList = [];
                    this.ruleForm = {
                        title: "",
                        desc: "",
                        category: "",
                        tags: [],
                        price: "",
                        price_off: "",
                        unit: "",
                        status: 1,
                        images: [],
                        inventory: "",
                        sale: "",
                        _id: "",
                    };
                }
            });
        },

        handleRemove(file, fileList) {
             this.ruleForm.images = fileList
                .filter((item) => item.status === "success")
                .map((item) => item.url);
        },

        async handlePictureCardPreview(file) {
            if (!file.url && !file.preview) {
                file.url = await getBase64(file);
            }
        },

        handleSuccess(file, fileList) {
            this.ruleForm.images.push(file.data.url);
        },
    },
};
</script>

<style lang="less" scoped>
.step-container {
    width: 70%;
    margin: 20px auto;
}
.goods-info {
    width: 70%;
    margin: 0 auto;

    &.hidden {
        display: none;
    }
}
</style>