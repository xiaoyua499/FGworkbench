<template>
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon class="demo-ruleForm">
    <el-form-item prop="pass">
      <el-input v-model="ruleForm.account" :placeholder="props.data.account" clearable />
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input v-model="ruleForm.validation" :placeholder="props.data.validation" :type="props.data.type"
        :show-password="!props.data.showCode">
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
      <span>忘记密码</span>
    </div>
    <el-form-item>
      <el-button class="login-bth" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const checked = ref(true)

const props = defineProps({
  data: {
    type: Object,
    default: () => { }
  }
})

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  account: '',
  validation: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', ruleForm)
    } else {
      console.log('error submit!', ruleForm)
      return false
    }
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

    /deep/.checkbox {
      display: flex;
      align-items: center;

      .el-checkbox__label {
        color: var(--el-checkbox-text-color);
      }
    }

    &>span {
      font-size: 12px;
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