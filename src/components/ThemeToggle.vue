<script setup lang="ts">
import { useTheme } from '@/composables/UseTheme'

const { theme } = useTheme()

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button @click="toggleTheme">
    {{ theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode' }}
  </button>
</template>

<style scoped>
button {
  background: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  padding: 0.5rem 1em;
  border-radius: 6px;
  cursor: pointer;
}
</style>
