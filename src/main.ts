import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Login from '@/view/login.vue'
import Home from '@/view/home.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      alias: '/home',
      component: Home
    },
    {
      path: '/Login',
      component: Login
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
