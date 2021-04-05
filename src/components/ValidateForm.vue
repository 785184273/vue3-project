<template>
  <form class="validate-form-container" @submit.prevent="submit">
    <slot></slot>
    <div class="submit-area">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const mitter = mitt()
export interface SubmitParams {
  error: boolean
}
type ValidateFnc = () => boolean
export default defineComponent({
  emits: {
    submitForm: (paylod: SubmitParams) => {
      return true
    }
  },
  setup (props, { emit }) {
    let fncArr: ValidateFnc[] = []
    // 点击submit提交
    const submit = () => {
      const error = fncArr.map(fnc => fnc()).every(result => result)
      emit('submitForm', { error })
    }
    // 添加事件监听
    const callback = (fnc?: ValidateFnc) => {
      fncArr.push(fnc!)
    }
    mitter.on('getValidateFnc', callback)
    // 组件注销销毁事件监听
    onUnmounted(() => {
      mitter.off('getValidateFnc', callback)
      // 清空fncArr
      fncArr = []
    })
    return {
      submit
    }
  }
})
</script>
