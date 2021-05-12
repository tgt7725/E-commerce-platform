<template>
    <div class="goods-manage-container">
        <div class="top-container">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item class="btns">
                    <el-button @click="handleClick">新增类目</el-button>
                    <el-button
                        @click="handleMore(handleDeleteMore, '删除', goods.deleteGoodsCategory)"
                        type="danger"
                        >删除类目</el-button
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
                <el-table-column type="selection" width="100">
                </el-table-column>
                <el-table-column prop="id" label="id" width="100">
                </el-table-column>
                <el-table-column prop="name" label="名称"> </el-table-column>
                <el-table-column prop="address" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)"
                            >编辑</el-button
                        >
                        <el-button
                            size="mini"
                            type="danger"
                            @click="
                                handleDelete(
                                    goods.deleteGoodsCategory,
                                    scope.row
                                )
                            "
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
                <el-form-item label="类目id" prop="id">
                    <el-input
                        v-model="ruleForm.id"
                        :disabled="!isAdd"
                    ></el-input>
                </el-form-item>
                <el-form-item label="类目名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="子类目" prop="c_items">
                    <el-select
                        v-model="ruleForm.c_items"
                        multiple
                        filterable
                        allow-create
                        placeholder="请选择标签"
                    >
                        <el-option
                            v-for="item in ruleForm.c_items"
                            :key="item"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button
                    type="primary"
                    @click="
                        isAdd
                            ? handleSubmitEdit(goods.addGoodsCategory, ruleForm)
                            : handleSubmitEdit(
                                  goods.editGoodsCategory,
                                  ruleForm
                              )
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
import tableList from "@/mixins/tableList.js";
export default {
    mixins: [fetchData(), tableList()],
    data() {
        return {
            ruleForm: {},
            rules: {
                id: [
                    {
                        required: true,
                        message: "类目id不能为空",
                        trigger: "blur",
                    },
                ],
                name: [
                    {
                        required: true,
                        message: "类目名称不能为空",
                        trigger: "blur",
                    },
                ],
                c_items: [
                    {
                        required: true,
                        message: "子类目不能为空",
                        trigger: "change",
                    },
                ],
            },
            tags: [],
            isAdd: false,
            callback: goods.getGoodsCategory,
        };
    },
    methods: {
        async handleClick() {
            this.isAdd = true;
            this.ruleForm = {
                id: "",
                name: "",
                c_items: [],
            };
            this.dialogVisible = true;
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