<template>
    <!-- 通过flex指定子元素水平布局 -->
    <div class="bg-white h-[64px] flex pr-4 border-b border-slate-100">
        <!-- 左边栏收缩,展开 -->
        <div class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 hover:bg-gray-200"
            @click="handleMenuWidth">
            <el-icon>
                <Fold v-if="menuStore.menuWidth == '300px'" />
                <Expand v-else />
            </el-icon>
        </div>
        <!-- 右边容器 通过ml-auto让其在父容器的右边-->
        <div class="ml-auto flex">
            <!-- 点击刷新 -->
            <el-tooltip class="box-item" effect="dark" content="刷新" placment="bottom">
                <div
                    class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 mr-2 hover:bg-gray-200" @click="handleRefresh">
                    <el-icon>
                        <Refresh v-if="!isFullscreen"/>
                    </el-icon>
                </div>
            </el-tooltip>
            <!-- 点击全屏展示 -->
            <el-tooltip class="box-item" effect="dark" content="全屏" placment="bottom">
                <div
                    class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 mr-2 hover:bg-gray-200" @click="toggle">
                    <el-icon>
                        <FullScreen v-if="!isFullscreen"/>
                        <Aim v-else />
                    </el-icon>
                </div>
            </el-tooltip>
            <!-- 下拉头像 -->
            <el-dropdown class="flex items-center justify-center">
                <span class="el-dropdown-link flex items-center justify-center text-gray-700 text-xs">
                    <!-- 头像Avatar -->
                    <el-avatar class="mr-2" :size="25"
                        src="https://img.quanxiaoha.com/quanxiaoha/f97361c0429d4bb1bc276ab835843065.jpg" />
                    Admin
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { useMenuStore } from '@/stores/menu';
import { useFullscreen } from '@vueuse/core';

//引入了菜单 store
const menuStore = useMenuStore()
// icon单击事件
const handleMenuWidth = () => {
    console.log("click");
    // 动态设置菜单的宽度大小
    menuStore.handleMenuWidth()
}

// isFullscreen,toggle 表示当前是否处于全屏,toggle用于动态切换全屏,非全屏
const {isFullscreen,toggle}=useFullscreen()
// 刷新页面
const handleRefresh=()=>location.reload()
</script>