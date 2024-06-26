import './assets/styles/global.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)
// app.use(router, Toast)

app.mount('#app')
