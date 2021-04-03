<template>
  <div class="row">
    <div v-for="(item, index) of computedListData" :key="index" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.avatar" class="rounded-circle border border-light w-25 my-3" :alt="item.title">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">{{ item.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
export interface ColumnProps {
  id: number
  title: string
  avatar: string
  description: string
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<Array<ColumnProps>>,
      required: true
    }
  },
  setup (props) {
    const computedListData = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require('@/assets/logo.png')
        }
        return item
      })
    })
    return {
      computedListData
    }
  }
})
</script>
