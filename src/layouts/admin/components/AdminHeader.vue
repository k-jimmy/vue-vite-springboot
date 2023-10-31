<template>
    <!-- 通过flex指定子元素水平布局 -->
    <div class="bg-white h-[64px] text-white flex pr-4 border-b border-slate-200">
        <!-- 左边栏收缩,展开 -->
        <el-icon class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 hover:bg-gray-200">
            <Fold />
        </el-icon>
        <!-- 右边容器 通过ml-auto让其在父容器的右边-->
        <div class="ml-auto flex">
            <!-- 点击全屏展示 -->
            <el-icon class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 mr-2 hover:bg-gray-200">
                <FullScreen />
            </el-icon>
            <!-- 下拉头像 -->
            <el-dropdown>
                <span class="el-dropdown-link text-white">
                    <!-- 头像Avatar -->
                    <el-avatar :size="25" src="https://img.quanxiaoha.com/quanxiaoha/f97361c0429d4bb1bc276ab835843065.jpg" />
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