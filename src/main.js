import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/animations.css'
import './assets/main.css'


createApp(App)
    .use(createPinia())
    .use(bootstrap)
    .use(router)
    .mount('#app')
