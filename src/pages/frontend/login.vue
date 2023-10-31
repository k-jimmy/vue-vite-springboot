<template>
    <!-- 使用grid网格布局,并指定列数为2,高度占满全屏 -->
    <div class="grid gird-cols-2 h-screen">
        <!-- 默认先适配移动端,占两列,order用于指定排列顺序,md用于适配非移动端(PC端) 背景色为黑色 -->
        <div class="col-span-2 order-2 p-10 md:col-span-1 md:order-1 bg-block">
            左边栏
        </div>
        <div class="col-span-2 order-1 md:col-span-1 md:order-2 bg-white">
            右边栏
        </div>
    </div>
</template>