import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app');

(async () => {
        try {
            const mod = await import('@motionone/vue')
            if (mod && mod.MotionPlugin) {
                app.use(mod.MotionPlugin)
            }
        } catch (err) {
            // Motion plugin is optional; continue without it.
            // console.warn('Motion plugin not installed:', err)
        }
    })()
