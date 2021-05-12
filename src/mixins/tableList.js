import * as goods from "@/api/goods.js";
export default function () {
    return {
        async created() {
            await this.getTableList();
        },
        data() {
            return {
                goods,
                pageInfo: {
                    currentPage: 1,
                    total: 0,
                    size: 5,
                    sizes: [1, 2, 5, 10],
                },
                tableData: [],
                selectedList: [],
                dialogVisible: false,
                callback: () => { }
            }
        },

        methods: {
            async getTableList() {
                await this.fetchData(this.callback, {
                    page: this.pageInfo.currentPage,
                    size: this.pageInfo.size,
                    ...this.formInline,
                });
                this.tableData = this.data.data.data;
                this.pageInfo.total = this.data.data.total;
                const totalPage = Math.ceil(
                    this.pageInfo.total / this.pageInfo.size
                );
                if (totalPage && this.pageInfo.currentPage > totalPage) {
                    this.pageInfo.currentPage = totalPage;
                    this.getTableList();
                }
            },

            handleEdit(info) {
                this.ruleForm = {
                    ...info,
                };
                this.dialogVisible = true;
            },

            handleDelete(handler, info) {
                this.$confirm("确认删除吗？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(async () => {
                    const res = await this.fetchData(
                        handler,
                        info.id,
                        "删除成功",
                        "删除失败",
                        false
                    );
                    res && this.getTableList();
                });
            },

            handleSelectionChange(selected) {
                this.selectedList = selected;
            },

            async handleSizeChange(newSize) {
                this.pageInfo.size = newSize;
                await this.getTableList();
            },

            async handleCurrentChange(newPage) {
                this.pageInfo.currentPage = newPage;
                await this.getTableList();
            },

            async handleSubmitEdit(handler, obj) {
                this.$refs["ruleForm"].validate(async (valid) => {
                    if (valid) {
                        if (!this.isAdd) {
                            await this.fetchData(
                                handler,
                                obj,
                                "修改成功",
                                "修改失败",
                                false
                            );
                        } else {
                            await this.fetchData(
                                handler,
                                obj,
                                null,
                                null,
                                false
                            );
                            this.isAdd != undefined && (this.isAdd = false);
                            this.$message.warning(this.data.msg);
                        }
                        this.dialogVisible = false;
                        await this.getTableList();
                    }
                });
            },

            async handleMore(handler, text, deleteFunc) {
                const len = this.selectedList.length;
                if (!len) {
                    this.$message.warning("请先选择表单项！");
                    return;
                }
                this.$confirm(`确认批量${text}选中表单项的吗？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(async () => {
                    this.loading = true;
                    await handler(deleteFunc);
                    this.loading = false;
                    await this.getTableList();
                });
            },

            async handleDeleteMore(handler) {
                for (let i = 0; i < this.selectedList.length; i++) {
                    const item = this.selectedList[i];
                    await this.fetchData(
                        handler,
                        item.id,
                        null,
                        null,
                        false
                    );
                }
                this.$message.success("批量删除成功");
            },

            handleClose(done) {
                this.$confirm("确认关闭？")
                    .then((_) => {
                        this.ruleForm.images && (this.ruleForm.images = []);
                        this.isAdd != undefined && this.isAdd && (this.isAdd = false);
                        this.dialogVisible = false;
                        done();
                    })
                    .catch((_) => { });
            },
        },
    }
}