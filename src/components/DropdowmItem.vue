<template>
  <li class="lw-dropdown-item" :class="{ 'is-disabled': disabled }">
    <a class="dropdown-item" href="#">
      <slot></slot>
    </a>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  }
})
</script>
<style scoped>
  .lw-dropdown-item.is-disabled {
    cursor: not-allowed;
  }
  .lw-dropdown-item.is-disabled * {
    color: #c0c4cc;
    pointer-events:  none;
  }
</style>
