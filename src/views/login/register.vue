<template>
  <div class="register-box">
    <h1 class="title">欢迎注册</h1>
    <div class="login">
      <p>已有账号?</p>
      <button @click="goLogin">登录</button>
    </div>
    <div class="register-from">
      <el-form ref="ruleFormRef" :model="registerForm" :rules="rules" label-width="120px" status-icon>
        <el-form-item label="用户名" prop="nickname">
          <el-input v-model="registerForm.nickname" placeholder="请设置用户名" />
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile">
          <el-input v-model="registerForm.mobile" placeholder="可用于登录或找回密码" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email" placeholder="可用于登录或找回密码" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" placeholder="请设置登录密码" />
        </el-form-item>
        <el-form-item label="请确认密码" prop="passwordRepeat">
          <el-input v-model="registerForm.passwordRepeat" placeholder="请确认密码" />
        </el-form-item>
        <el-form-item class="from-button">
          <el-button type="primary" @click="submitRegisterForm(ruleFormRef)">
            注册
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { nextTick, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import router from '@/router'
import { register } from '@/server/api/login';
import { ElMessage } from 'element-plus'
name: 'Register'
const ruleFormRef = ref<FormInstance>()

//注册表单数据
const registerForm = reactive({
  mobile: "13049153466", //手机号码
  email: "123456@qq.com",//邮箱
  nickname: "admin",//昵称
  password: "123456",//密码
  passwordRepeat: "123456"//确认密码
})

//表单验证规则
const rules = reactive<FormRules>({
  nickname: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在3到5位之间', trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在6到16位之间', trigger: 'blur' },
  ],
  passwordRepeat: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在6到16位之间', trigger: 'blur' },
  ],
})

//提交注册表单
const submitRegisterForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    console.log(valid);

    if (valid) {
      sendRegister(registerForm)
    } else {
      console.log('error submit!')
    }
  })
}

//重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

//跳转登录页面
const goLogin = () => {
  router.go(-1)
}

//发送注册信息
const sendRegister = async (ruleForm: any) => {
  //获取发送注册数据后的回调信息
  const data = await register(ruleForm)
    .then(res => {
      const data = res
      return data
    }
    )
    .catch(res => {
      const data = res.response.data
      return data
    }
    )
  //判断是否注册成功
  if (data.status === 201) {
    //如果注册成功跳转到登录页面
    goLogin()
    ElMessage({
      message: '注册成功',
      type: 'success',
      offset: 150
    })
    // console.log(data.status, '注册成功');
  } else {
    ElMessage({
      message: data.message,
      type: 'error',
      offset: 150
    })
    // console.log(data.message);
  }
}
</script>

<style lang='less' scoped>
.register-box {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 625px;
  height: 500px;
  // background-image: linear-gradient(180deg, #77a5fe, #2c72fd);
  background-image: url(http://p3-ecom-fe.byteimg.com/tos-cn-i-w59vco1lho/ec877d2a0b2e4b1a9ffac92818413c31.png~tplv-w59vco1lho-png.png);
  background-size: cover;

  .title {
    color: #fff;
  }

  .login {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    color: #fff;

    &>button {
      margin-left: 10px;
      border: none;
      background-color: rgba(0, 0, 0, 0);
      color: #000;
    }
  }

  :deep(.register-from) {
    width: 80%;

    // background: hsla(0, 0%, 100%, 0.1);
    .el-form-item__label {
      color: #fff;
    }

    .el-input {
      width: 80%;
      height: 35px;
    }

    .from-button {
      .el-button {
        width: 140px;
      }
    }
  }
}
</style>