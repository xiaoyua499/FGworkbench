<template>
  <div class="register-box">
    <h1 class="title">欢迎注册</h1>
    <div class="login">
      <p>已有账号?</p>
      <button @click="goLogin">登录</button>
    </div>
    <div class="register-from">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" status-icon>
        <el-form-item label="用户名" prop="nickname">
          <el-input v-model="ruleForm.nickname" placeholder="请设置用户名" />
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="可用于登录或找回密码" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" placeholder="可用于登录或找回密码" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请设置登录密码" />
        </el-form-item>
        <el-form-item label="请确认密码" prop="passwordRepeat">
          <el-input v-model="ruleForm.passwordRepeat" placeholder="请确认密码" />
        </el-form-item>
        <el-form-item class="from-button">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
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
const ruleForm = reactive({
  mobile: "13049153466",
  email: "123456@qq.com",
  nickname: "admin",
  password: "123456",
  passwordRepeat: "123456"
})

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

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      Register(ruleForm)
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const goLogin = () => {
  router.go(-1)
}

const Register = async (ruleForm: any) => {
  const data = await register(ruleForm)
    .then(res => {
      const data = res
      return data
    }
    )
    .catch(req => {
      const data = req.response.data
      return data
    }
    )
  if (data.status === 201) {
    goLogin()
    ElMessage({
      message: '注册成功',
      type: 'success',
      offset:150
    })
    console.log(data.status, '注册成功');
  } else {
    // ElMessage.error(data.message)
    ElMessage({
      message: data.message,
      type: 'error',
      offset: 150
    })
    console.log(data.message);
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