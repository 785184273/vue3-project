<template>
  <div class="container">
    <global-header :user="userData"></global-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

const userData: UserProps = {
  isLogin: true,
  name: 'zhangsan'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      userData
    }
  }
})
</script>
