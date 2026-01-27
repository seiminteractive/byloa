import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
// Register ClientOnly component globally
app.component('ClientOnly', {
  setup(_, { slots }) {
    return () => slots.default?.()
  }
})

app.use(router).mount('#app')
