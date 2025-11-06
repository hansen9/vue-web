<script setup lang="ts">
import { RouterLink } from 'vue-router'
import themeToggle from './ThemeToggle.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">
      <RouterLink to="/" class="nav-link">
        <h1>My Website</h1>
      </RouterLink>
    </div>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    </div>
    <themeToggle />
  </nav>
  <select v-model="locale">
    <option value="en">English</option>
    <option value="id">Indonesia</option>
  </select>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}

.nav-brand h1 {
  margin: 0;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #42b883;
}
</style>
