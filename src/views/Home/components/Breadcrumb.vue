<template>
    <div class="bread-crumb">
        <div class="container">
            <div class="left">
                <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    @click="handleHidden"
                ></el-button>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(m, i) in breadMenu" :key="i">{{m}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    欢迎您，{{user.username ? user.username : "主人"}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import {whoAmI, loginOut} from '@/api/user.js'
export default {
    data() {
        return {
            user: {}
        }
    },
    props: ['breadMenu'],
    created() {
        this.user = whoAmI();
    },
    methods: {
        handleHidden() {
            this.$emit('hiddenMenu');
        },
        handleClick() {
            loginOut();
            this.$router.push('/login')
        }
    },
};
</script>

<style lang="less">
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    padding: 0 20px;
    height: 50px;
    font-size: 16px;

    .left {
        display: flex;
        justify-content: space-between;
        
    }

    .el-breadcrumb {
        align-self: center;
        margin-left: 20px;
    }
    .el-dropdown {
        cursor: pointer;
    }
}
</style>