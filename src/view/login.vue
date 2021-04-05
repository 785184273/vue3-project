<template>
  <validate-form
    @submitForm="submitForm">
    <div class="mb-3">
      <validate-input
        label="邮件地址"
        v-model="email"
        type="text"
        placeholder="请输入邮件地址"
        :rules="emailRule"></validate-input>
    </div>
    <div class="mb-3">
      <validate-input
        label="密码"
        v-model="password"
        type="password"
        placeholder="请输入密码"
        :rules="passwordRule"></validate-input>
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary">Submit</button>
    </template>
  </validate-form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'
import ValidateForm, { SubmitParams } from '@/components/ValidateForm.vue'
export default defineComponent({
  name: 'login',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const emailRule: RulesProps[] = [
      { type: 'require', message: '数据不能为空' },
      { type: 'email', message: '请输入正确的邮件格式' }
    ]
    const passwordRule: RulesProps[] = [
      { type: 'require', message: '数据不能为空' }
    ]
    const email = ref('') // email
    const password = ref('') // 密码
    const submitForm = ({ error }: SubmitParams) => {
      if (error) {
        email.value = ''
        password.value = ''
      }
    }
    return {
      emailRule,
      passwordRule,
      email,
      password,
      submitForm
    }
  }
})
</script>
