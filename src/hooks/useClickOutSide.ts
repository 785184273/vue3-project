import { onMounted, onUnmounted, ref, Ref } from 'vue'

const useClickOutSide = (element: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false)
  const handler = (e: MouseEvent) => {
    if (element.value) { // 判断是否存在
      isClickOutSide.value = element.value.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler) // mounted注册点击事件
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler) // unmounted销毁点击事件
  })
  return {
    isClickOutSide
  }
}
export default useClickOutSide
