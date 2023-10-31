<template>
  <!-- 使用 grid 网格布局，并指定列数为 2，高度占满全屏 -->
  <div class="grid grid-cols-2 h-screen">
    <!-- 默认先适配移动端，占两列，order 用于指定排列顺序，md 用于适配非移动端（PC 端）；背景色为黑色 -->
    <div
      class="col-span-2 order-2 p-10 md:col-span-1 md:order-1 bg-black animate__animated animate__bounceInLeft animete__fast">
      <!-- 指定为flex布局,并设置为屏幕垂直水平居中,高度为100% -->
      <div class="flex justify-center items-center h-full flex-col">
        <h2 class="font-bold text-4xl mb-7 text-white">Weblog 博客登录</h2>
        <p class="text-white">一款由 Spring Boot + Mybaits Plus + Vue 3.2 + Vite 4 开发的前后端分离博客。</p>
        <img src="@/assets/sjsbg.png" class="w-1/2">
      </div>
    </div>
    <div
      class="col-span-2 order-1 md:col-span-1 md:order-2 bg-white animate__animated animate__bounceInRight animete__fast">
      <!-- flex-col 用于指定子元素垂直排列 -->
      <div class="flex justify-center items-center h-full flex-col">
        <!-- 大标题,设置字体粗细,大小,下边距 -->
        <h1 class="font-bold text-4xl mb-5">欢迎回来</h1>
        <!-- 设置flex布局,内容垂直水平居中,文字颜色,以及字内容水平方向x轴间距 -->
        <div class="flex items-center justify-center mb-7 text-gray-400 space-x-2">
          <!-- 左边横线,高度为1px,宽度为16,背景色设置 -->
          <span class="h-[1px] w-6 bg-gray-200"></span>
          <span>账号密码登录</span>
          <!-- 右边横线 -->
          <span class="h-[1px] w-6 bg-gray-200"></span>
        </div>
        <!-- 引入Element Plus 表单组件,移动端设置宽度为5/6,PC端设置为2/5 -->
        <el-form class="w-5/6 md:w-2/5" ref="formRef" :rules="rules" :model="form">
          <el-form-item prop="username">
            <!-- 输入框组件 -->
            <el-input size="large" v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" clearable />
          </el-form-item>
          <el-form-item prop="password">
            <!-- 密码框组件 -->
            <el-input size="large" type="password" v-model="form.password" placeholder="请输入密码" :prefix-icon="Lock"
              clearable show-password/>
          </el-form-item>
          <el-form-item>
            <el-button class="w-full mt-2" :loading="loading" size="large" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
// 引入Element Plus 中的用户、锁图标
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/api/admin/user'
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { showMessage } from '@/composables/utils'
import { setToken } from '@/composables/auth'
// import { ref } from 'vue'
// 登录按钮加载
const loading = ref(false)
// 定义响应式的表单对象
const form = reactive({
  username: '',
  password: ''
})
const router = useRouter()
// 表单引用
const formRef = ref(null)
// 表单验证规则
const rules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
}
// 登录
const onSubmit = () => {
  console.log('登录')
  // 先验证form表单字段
  formRef.value.validate((valid) => {
    if (!valid) {
      console.log('表单验证不通过')
      return false
    }
    loading.value = true
    login(form.username, form.password).then((res) => {
      console.log(res)
      // 判断是否成功
      if (res.success == true) {
        // 提示登录成功
        showMessage('登录成功')
        //存储token到cookie中
        let token = res.data.token
        setToken(token)
        // 跳转到后台首页
        router.push('admin/index')
      } else {
        // 获取服务端返回的错误消息
        let message = res.message
        // 提示消息
        showMessage(message, 'error')
        // loading.value = false
      }
    })
      .finally(() => {
        // 结束加载
        loading.value = false
      })

  })

}


// 按回车键后,执行登录事件
function onKeyUp(e) {
  console.log(e)
  if (e.key == 'Enter') {
    onSubmit()
  }
}
// 添加键盘监听
onMounted(() => {
  console.log('添加键盘监听')
  document.addEventListener('keyup', onKeyUp)
})

// 移除键盘监听
onBeforeUnmount(() => {
  console.log('移除键盘监听')
  document.removeEventListener('keyup', onKeyUp)
})
</script>