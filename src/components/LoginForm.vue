<template>
  <el-form ref="ruleFormRef" :model="LoginForm" :rules="rules">
    <!-- 账号 -->
    <el-form-item prop="account">
      <el-input v-model="LoginForm.account" :placeholder="props.data.account" clearable />
    </el-form-item>
    <!-- 验证 -->
    <el-form-item prop="validation">
      <el-input v-model="LoginForm.validation" :placeholder="props.data.validation" :type="props.data.type"
        :show-password="!props.data.showCode" >
        <template #suffix v-if="props.data.showCode">
          <a class="verification" href="#">发送验证码</a>
        </template>
      </el-input>
    </el-form-item>
    <!-- 记住密码与忘记密码选项 -->
    <div class="password-switch" v-if="!props.data.showCode">
      <div class="checkbox">
        <el-checkbox v-model="checked" label="记住账号密码" size="large" />
      </div>
      <div class="right">
        <span @click="goRegister">还未注册？</span>
        <span>忘记密码</span>
      </div>
    </div>
    <!-- 登录按钮 -->
    <el-form-item>
      <el-button class="login-bth" type="primary" @click="submitLoginForm(ruleFormRef)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import router from '@/router'
import { login } from '@/server/api/login'
import { EmailData, PhoneData } from '@/plugin/types'
import { ElMessage } from 'element-plus'
name:'LoginFrom'
//是否记住密码
const checked = ref(true)

const props = defineProps({
  data: {
    type: Object,
    default: () => { }
  }
})

const ruleFormRef = ref<FormInstance>()

//登录表单数据
const LoginForm = reactive({
  account: '',
  validation: ''
})

//邮箱登录数据
let emailData: EmailData = {
  email: '',
  password: ''
}

//手机号登录数据
let phoneData: PhoneData = {
  mobile: '',
  validation: ''
}

//表单验证规则
const rules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
  validation: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在6到16位之间', trigger: 'blur' },
  ],
})

//提交登录数据
const submitLoginForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      //判断登录方式
      if (props.data.validation === '密码') {
        emailData.email = LoginForm.account
        emailData.password = LoginForm.validation
        sendLogin(emailData)
        goHome()
        // console.log('email', emailData);
      } else {
        phoneData.mobile = LoginForm.account
        phoneData.validation = LoginForm.validation
        // console.log('phone', phoneData);
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}

//跳转到注册页面
const goRegister = () => {
  router.push('/login/register')
}

//跳转到首页
const goHome = () => {
  router.push('/')
}

//发送登录请求
const sendLogin = async (emailData: any) => {
  await login(emailData).then(res => {
    //获取token
    const Token = res.data.data.info.token
    //将token存储到localStorage
    localStorage.setItem('token', JSON.stringify(Token))
    // console.log(Token);
  })
    .catch(res => {
      const message = res.response.data.message
      ElMessage({
        message: message,
        type: 'error',
        offset: 150
      })
      // console.log(message);
    })
}

</script>

<style lang='less' scoped>
.el-form {
  margin: 15px;

  .el-input {
    height: 40px;
  }

  .el-form-item:nth-child(2) {
    margin-bottom: 10px;

    .verification {
      color: #1f6aff;
    }
  }


  .password-switch {
    display: flex;
    justify-content: space-between;
    align-items: center;

    :deep(.checkbox) {
      display: flex;
      align-items: center;

      .el-checkbox__label {
        color: var(--el-checkbox-text-color);
      }
    }

    .right {
      span {
        font-size: 12px;
      }
    }
  }


  .login-bth {
    width: 100%;
    height: 40px;
    background-color: #1966ff;

    &:hover {
      background-color: #409eff;
    }
  }
}
</style>