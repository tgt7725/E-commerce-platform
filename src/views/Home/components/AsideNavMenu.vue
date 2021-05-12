<template>
    <div class="aside-nav-menu">
        <el-menu
            :default-active="$route.meta.navItem"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#001529"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse-transition="false"
        >
            <el-submenu v-for="(m, i1) in menu" :key="m.title" :index="m.title">
                <template slot="title">
                    <i :class="m.icon"></i>
                    <span>{{ m.title }}</span>
                </template>
                <template v-if="m.children">
                    <el-menu-item-group
                        v-for="(sub, i2) in m.children"
                        :key="sub.title"
                    >
                        <router-link
                            :to="sub.path"
                            v-if="!sub.canHidden || role === 'admin'"
                        >
                            <el-menu-item
                                :index="sub.title"
                                class="sub-menu-item"
                            >
                                <i :class="sub.icon"></i>
                                <span>{{ sub.title }}</span>
                            </el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    async created() {
        await this.$store.dispatch("loginUser/whoAmI");
        this.role = this.$store.state.loginUser.loginUser.role;
    },
    data() {
        return {
            role: "admin",
        };
    },
    props: ["isCollapse", "menu"],
};
</script>

<style lang="less">
.el-menu-vertical-demo {
    height: 100vh;
}
.el-menu-item-group__title {
    display: none;
}
.sub-menu-item {
    min-width: 150px !important;
    &:hover {
        color: rgb(255, 208, 75) !important;
        i {
            color: rgb(255, 208, 75) !important;
        }
    }
}
</style>