<template>
  <column-list :list="data"></column-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'

const columnData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    avatar: '',
    description: '这是专栏'
  },
  {
    id: 1,
    title: 'test1的专栏',
    avatar: 'https://v3.cn.vuejs.org/logo.png',
    description: '这是专栏'
  },
  {
    id: 1,
    title: 'test1的专栏',
    avatar: 'https://v3.cn.vuejs.org/logo.png',
    description: '这是专栏'
  },
  {
    id: 1,
    title: 'test1的专栏',
    avatar: 'https://v3.cn.vuejs.org/logo.png',
    description: '这是专栏'
  }
]

export default defineComponent({
  name: 'home',
  components: {
    ColumnList
  },
  setup () {
    return {
      data: columnData
    }
  }
})
</script>
