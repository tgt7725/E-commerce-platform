<template>
    <div class="statistics-container">
        <div class="card-container">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>商品总览</span>
                </div>
                <div class="text item">
                    列表内容
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>用户总览</span>
                </div>
                <div class="text item">
                    列表内容
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>销售总览</span>
                </div>
                <div class="text item">
                    列表内容
                </div>
            </el-card>
        </div>
        
    </div>
</template>
<script>
export default {
}
</script>

<style lang="less" scoped>
.statistics-container {
    padding: 20px;

    .card-container {
        display: flex;

        .box-card {
            flex: 1;
        }
    }
}
</style>
