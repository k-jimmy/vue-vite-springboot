<template>
    <div class="fixed top-[64px] h-[44px] px-2 right-0 z-50 flex items-center bg-white transition-all duration-300 shadow"
        :style="{ left: menuStore.menuWidth }">
        <!-- 左边:导航栏 -->
        <el-tabs v-model="activeTab" type="card" class="demo-tabs" @tab-remove="removeTab" style="min-width: 10px;">
            <el-tab-pane v-for="item in tabList" :key="item.path" :label="item.title" :name="item.path"
                :closable="item.path != '/admin/index'">
                {{ item.content }}
            </el-tab-pane>
        </el-tabs>

        <!-- 右边:下拉栏 -->
        <span class="ml-auto flex items-center justify-center h-[32px] w-[32px]">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon>
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>关闭全部</el-dropdown-item>
                        <el-dropdown-item>关闭其它</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </span>
    </div>
    <div class="h-[44px]"></div>
</template>
<script setup>
import { ref } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

const menuStore = useMenuStore()
const route = useRoute()
// 当前被选中的 tab
const activeTab = ref(route.path)
const tabList = ref([
    {
        title: '仪表盘',
        path: "/admin/index"
    },
    {
        title: '文章管理',
        path: "/admin/article/list"
    },
    {
        title: '分类管理',
        path: "/admin/category/list"
    },
    {
        title: '标签管理',
        path: "/admin/tag/list"
    },
    {
        title: '博客设置',
        path: "/admin/blog/setting"
    }
])
// 添加tab标签页
function addTab(tab) {
    // 标签是否不存在
    let isTableNotExister = tabList.value.findIndex(item => item.path == tab.path) == -1
    // 如果不存在
    if (isTableNotExister) {
        tabList.value.push(tab)
    }
}

// 在路由切换前被调用
onBeforeRouteUpdate((to, from) => {
    // 设置被激活的tab标签
    activeTab.value = to.path
    // 添加tab标签页
    addTab({ title: to.meta.title, path: to.path })
})
const removeTab = (targetName) => {

}
</script>
<style>
.el-tabs__item {
    font-size: 12px;
    border: 1px solid #d8dce5 !important;
    border-radius: 3px !important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item {
    margin-left: 0.1rem !important;
    margin-right: 0.1rem !important;
}

.el-tabs__item.is-active {
    background-color: var(--el-color-primary) !important;
    color: #fff;
}

.el-tabs__item.is-active::before {
    content: "";
    background-color: #fff;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    margin-right: 4px;
}

.el-tabs {
    height: 32px;
}

.el-tabs__header {
    margin-bottom: 0;
}

.el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 0;
}

.el-tabs--card>.el-tabs__header .el-tabs__item {
    height: 32px;
    line-height: 32px;
    border: 0;
    background: #fff;
}

.el-tabs--card>.el-tabs__header {
    border: 0;
}

.el-tabs__nav-prev,
.el-tabs__nav-next {
    line-height: 35px;
}

.is-disabled {
    cursor: not-allowed;
    color: #d1d5db;
}
</style>
  