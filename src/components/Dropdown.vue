<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      class="btn btn-primary btn-outline-light dropdown-toggle"
      @click="changeToggle"
      type="button">
      {{ title }}
    </button>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="toggle">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from 'vue'
import useClickOutSide from '../hooks/useClickOutSide'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const toggle = ref(false)
    const changeToggle = () => {
      toggle.value = !toggle.value
    }

    const dropdownRef = ref<null | HTMLElement>(null) // 关联dropdownRef
    const { isClickOutSide } = useClickOutSide(dropdownRef)
    watch(isClickOutSide, (val) => {
      if (!val && toggle.value) {
        toggle.value = false
      }
    })
    return {
      toggle,
      changeToggle,
      dropdownRef
    }
  }
})
</script>
