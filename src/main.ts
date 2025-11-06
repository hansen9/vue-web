import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import id from './locales/id.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || navigator.language.startsWith('id') ? 'id' : 'en',
  fallbackLocale: 'en',
  messages: { en, id },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
