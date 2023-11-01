<template>
    <div class="bg-slate-800 h-screen text-white" :style="{ width: menuStore.menuWidth  }">
        <div class="flex items-center justify-center h-[64px]">
            <!-- 顶部LOGO,指定高度64px,和右边的header头保持一致 -->
            <img src="@/assets/logo.png" class="h-[60px]">
        </div>
        <el-menu :default-active="defaultActive" @select="handleSelct" :collapse="isCollapse" :collapse-transition="false">
            <template v-for="(item, index) in menus" :key="index">
                <el-menu-item :index="item.path">
                    <el-icon>
                        <!-- 动态图标 -->
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<style>
.el-menu {
    background-color: rgb(30 41 59 / 1);
    border-right: 0;
}

.el-sub-menu__title {
    color: #fff;
}

.el-sub-menu__title:hover {
    background-color: #ffffff10;
}

.el-menu-item.is-active {
    background-color: #409eff10;
    color: #6f83f5;
}

.el-menu-item.is-active:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--el-color-primary);
}

.el-menu-item {
    color: #fff;
}

.el-menu-item:hover {
    background-color: #ffffff10;
}
</style>

<script setup>
import { ref ,computed} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/menu';

const route = useRoute()
const router = useRouter()
// 引入 useMenuStore
const menuStore = useMenuStore()
// 是否折叠
const isCollapse=computed(()=>!(menuStore.menuWidth=='300px'))
//根据路由地址判断哪个菜单被选中
const defaultActive = ref(route.path)
const handleSelct = (path) => {
    router.push(path)
}
const menus = [
    {
        'name': "仪表盘",
        'icon': "Monitor",
        'path': "/admin/index"
    },
    {
        'name': "文章管理",
        'icon': "Document",
        'path': "/admin/article/list"
    },
    {
        'name': "分类管理",
        'icon': "FolderOpened",
        'path': "/admin/category/list"
    },
    {
        'name': "标签管理",
        'icon': "PriceTag",
        'path': "/admin/tag/list"
    },
    {
        'name': "博客设置",
        'icon': "Setting",
        'path': "/admin/blog/setting"
    }
]
</script>