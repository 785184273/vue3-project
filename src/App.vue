<template>
  <div class="container">
    <global-header :user="userData"></global-header>
    <column-list :list="data"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const userData: UserProps = {
  isLogin: true,
  name: 'zhangsan'
}
const columnData: Array<ColumnProps> = [
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
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      data: columnData,
      userData
    }
  }
})
</script>
