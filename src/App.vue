<script setup lang="ts">
import Navbar from './components/NavBar.vue'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()
watch(locale, (newLocale) => localStorage.setItem('locale', newLocale))
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
:root {
  --bg-color: #ffffff;
  --text-color: #111111;
}

[data-theme='dark'] {
  --bg-color: #0e0e0e;
  --text-color: #eeeeee;
}
.app {
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #34495e;
  line-height: 1.6;
}

/* Reset default margins and padding */
body {
  margin: 0;
  padding: 0;
  background: var(--bg-color);
  color: var(--text-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
