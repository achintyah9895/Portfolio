import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/Portfolio/'),
  routes: [
    // Add routes here
  ]
})

createApp(App)
  .use(router)
  .mount('#app')

