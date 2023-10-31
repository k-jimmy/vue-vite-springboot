<template>
    <!-- 外层容器 -->
    <el-container>
        <!-- 左边侧边栏 -->
        <el-aside>
            <AdminMenu></AdminMenu>
        </el-aside>
        <!-- 右边主内容区域 -->
        <el-container>
            <el-header>
                <AdminHeader></AdminHeader>
            </el-header>
            <el-main>
                <!-- 标签导航栏 -->
                <AdminTagList></AdminTagList>
                <!-- 主内容(根据路由动态展示不同页面) -->
                <router-view></router-view>
            </el-main>
            <el-footer>
                <AdminFooter></AdminFooter>
            </el-footer>
        </el-container>
    </el-container>
</template>
  
<script setup>
import AdminFooter from "./components/AdminFooter.vue";
import AdminHeader from "./components/AdminHeader.vue"
import AdminMenu from "./components/AdminMenu.vue"
import AdminTagList from "./components/AdminTagList.vue"
</script>