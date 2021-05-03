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
                    <i class="el-icon-location"></i>
                    <span>{{ m.title }}</span>
                </template>
                <template v-if="m.children">
                    <el-menu-item-group
                        v-for="(sub, i2) in m.children"
                        :key="sub.title"
                    >
                        <!-- <template v-if="!sub.canHidden">
                            <router-link :to="sub.path" v-if="Cookie.get('role') !== 'admin'">
                                <el-menu-item :index="sub.title">
                                    <i class="el-icon-location"></i>
                                    <span>{{ sub.title }}</span>
                                </el-menu-item>
                            </router-link>
                        </template> -->
                        <router-link :to="sub.path">
                                <el-menu-item :index="sub.title">
                                    <i class="el-icon-location"></i>
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
import Cookie from 'js-cookie'
export default {
    data() {
        return {
            Cookie
        }
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
</style>