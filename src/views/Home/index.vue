<template>
    <div class="home">
        <el-container>
            <el-aside ref="aside">
                <AsideNavMenu :isCollapse="isCollapse" :menu="menu" />
            </el-aside>
            <el-main>
                <Breadcrumb @hiddenMenu="handleHidden" :breadMenu="breadMenu" />
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import AsideNavMenu from './components/AsideNavMenu'
import Breadcrumb from './components/Breadcrumb'
export default {
    data() {
        return {
            isCollapse: false,
            menu: []
        };
    },
    created() {
        const dfs = routes => {
            if(!routes) {
                return;
            }
            const arr = [];
            routes.forEach(r => {
                const obj = {};
                if(r.meta && r.meta.navItem) {
                    obj.title = r.meta.navItem;
                    obj.path = r.path;
                    obj.canHidden = r.meta.canHidden ? r.meta.canHidden : false;
                    obj.children = dfs(r.children);
                    arr.push(obj);                    
                }
            })
            return arr;
        }
        this.menu = dfs(this.$router.options.routes)
        // console.log(this.menu);
    },
    computed: {
        breadMenu() {
            return this.$route.matched.map(m => {
                return m.meta ? m.meta.navItem : "";
            }).filter(m => m);
        },
    },
    components: {
        AsideNavMenu,
        Breadcrumb
    },
    methods: {
        handleHidden() {
            this.isCollapse = !this.isCollapse;
            this.$refs.aside.$el.classList.toggle('hidden');
        }
    },
}
</script>

<style lang="less" scoped>
.el-aside {
    width: 180px!important;
    height: 100vh;
    background: #001529;   
    overflow: hidden;
    transition: width .3s;

    &.hidden {
        width: 64px!important;
    }
}
.el-main {
    padding: 0;
}
</style>