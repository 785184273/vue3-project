<template>
  <label class="form-label">{{ label }}</label>
  <input
    type="email"
    class="form-control"
    :value="inputRef.val"
    :class="{ 'is-invalid': inputRef.error }"
    v-bind="$attrs"
    @blur="validateInput"
    @input="changeValue"
  >
  <div v-if="inputRef.error" class="invalid-feedback">
    {{ inputRef.message }}
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType, toRefs } from 'vue'
import { mitter } from './ValidateForm.vue'
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export interface RulesProps {
  type: 'require' | 'email'
  message: string
}
export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    rules: {
      type: Array as PropType<RulesProps[]>,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const { modelValue } = toRefs(props)
    const inputRef = reactive({
      val: modelValue, // 当前输入框的值
      error: false, // 是否验证错误
      message: '' // 验证错误信息
    })
    const validateInput = () => {
      const validateResult = props.rules.every(rule => {
        inputRef.message = rule.message
        let passed = true
        switch (rule.type) {
          case 'require':
            passed = !!inputRef.val.trim()
            break
          case 'email':
            passed = emailReg.test(inputRef.val)
            break
          default:
            break
        }
        return passed
      })
      inputRef.error = !validateResult
      return validateResult
    }
    // 触发事件监听
    mitter.emit('getValidateFnc', validateInput)

    const changeValue = (e: KeyboardEvent) => {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }
    return {
      inputRef,
      validateInput,
      changeValue
    }
  }
})
</script>
