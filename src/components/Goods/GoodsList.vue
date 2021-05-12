<template>
    <div class="goods-list-container">
        <div class="top-container">
            <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline"
            >
                <el-form-item label="搜索关键字">
                    <el-input
                        v-model="formInline.searchWord"
                        placeholder="搜索关键字"
                        clearable
                        @clear="getTableList"
                    ></el-input>
                </el-form-item>
                <el-form-item label="商品类目">
                    <el-select
                        v-model="formInline.category"
                        placeholder="商品类目"
                        clearable
                        @change="getTableList"
                    >
                        <el-option
                            v-for="item in categories"
                            :key="item._id"
                            :label="item.name"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="getTableList"
                        :loading="loading"
                        >搜索</el-button
                    >
                </el-form-item>
                <el-form-item class="btns">
                    <el-button
                        @click="handleMore(handleMoreStatusChange, '上/下架')"
                        >上/下架商品</el-button
                    >
                    <el-button
                        @click="handleMore(handleDeleteMore, '删除', goods.deleteGoods)"
                        type="danger"
                        >删除商品</el-button
                    >
                    <el-button @click="$router.push({ name: 'AddGoods' })"
                        >新增商品</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
        <div class="list-container">
            <el-table
                :data="tableData"
                stripe
                border
                style="width: 100%"
                v-loading="loading"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="50"> </el-table-column>
                <el-table-column type="index" prop="_id" label="id">
                </el-table-column>
                <el-table-column prop="title" label="标题"> </el-table-column>
                <el-table-column prop="desc" label="描述" width="150">
                </el-table-column>
                <el-table-column prop="category" label="类目" width="80">
                    <template slot-scope="scope">
                        {{
                            categories[scope.row.category - 1]
                                ? categories[scope.row.category - 1].name
                                : ""
                        }}
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="预售价格" width="80">
                </el-table-column>
                <el-table-column prop="price_off" label="折扣价格" width="80">
                </el-table-column>
                <el-table-column prop="tags" label="标签" width="100">
                    <template slot-scope="scope">
                        {{ scope.row.tags.join(", ") }}
                    </template>
                </el-table-column>
                <el-table-column prop="inventory" label="库存量" width="120">
                </el-table-column>
                <el-table-column prop="status" label="上架状态" width="80">
                    <template slot-scope="scope">
                        {{ scope.row.status ? "是" : "否" }}
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)"
                            >编辑</el-button
                        >
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(goods.deleteGoods, scope.row)"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageInfo.currentPage"
                :page-sizes="pageInfo.sizes"
                :page-size="pageInfo.size"
                :total="pageInfo.total"
                layout="total, sizes, prev, pager, next, jumper"
            >
            </el-pagination>
        </div>
        <el-dialog
            title="编辑"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose"
        >
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
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
                    <el-select v-model="ruleForm.category">
                        <el-option
                            v-for="item in categories"
                            :key="item._id"
                            :label="item.name"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="标签" prop="tags">
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
                <el-form-item label="预售价格" prop="price">
                    <el-input v-model="ruleForm.price"></el-input>
                </el-form-item>
                <el-form-item label="折扣价格" prop="price_off">
                    <el-input v-model="ruleForm.price_off"></el-input>
                </el-form-item>
                <el-form-item label="是否上架" prop="status">
                    <el-select v-model="ruleForm.status" placeholder="上架状态">
                        <el-option label="是" :value="1"> </el-option>
                        <el-option label="否" :value="0"> </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="库存量" prop="inventory">
                    <el-input v-model="ruleForm.inventory"></el-input>
                </el-form-item>
                <el-form-item label="计量单位" prop="unit">
                    <el-input v-model="ruleForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="商品图片" prop="images" required>
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
                    </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button
                    type="primary"
                    @click="
                        handleSubmitEdit(goods.editGoods, ruleForm)
                    "
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
import * as goods from "@/api/goods.js";
import fetchData from "@/mixins/fetchData.js";
import goodsInfo from "@/mixins/goodsInfo.js";
import tableList from "@/mixins/tableList.js";

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export default {
    mixins: [fetchData(), tableList(), goodsInfo()],

    data() {
        return {
            formInline: {
                searchWord: "",
                category: "",
            },
            fileList: [],
            callback: goods.getGoodsList,
        };
    },

    methods: {
        handleEdit(info) {
            this.ruleForm = {
                ...info,
            };
            this.fileList = info.images.map((item) => ({
                name: "",
                url: item,
            }));
            this.dialogVisible = true;
        },

        async handleMoreStatusChange() {
            for (let i = 0; i < this.selectedList.length; i++) {
                const item = this.selectedList[i];
                item.status = !item.status;
                await this.fetchData(goods.editGoods, item, null, null, false);
            }
            this.$message.success("批量上/下架成功");
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

        async handleSuccess(file) {
            this.ruleForm.images.push(file.data.url);
        },
    },
};
</script>

<style lang="less" scoped>
.top-container {
    padding: 20px 10px 0 10px;
    .btns {
        float: right;

        &::after {
            content: "";
            clear: both;
            display: block;
        }
    }
}
.block {
    margin: 20px auto;
    text-align: center;
    overflow: auto;
}
</style>