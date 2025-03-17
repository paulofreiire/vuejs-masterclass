import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin } from '@formkit/vue'
import config from '../formkit.config'
import { createMetaManager } from 'vue-meta'

import './assets/index.css'
import 'iconify-icon'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createMetaManager())
app.use(plugin, config)

app.mount('#app')
