import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

// Register Vue Toastification
app.use(Toast, {
  position: 'top-right',
  timeout: 1500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
})

// Register ClientOnly component globally
app.component('ClientOnly', {
  setup(_, { slots }) {
    return () => slots.default?.()
  }
})

app.use(router).mount('#app')
