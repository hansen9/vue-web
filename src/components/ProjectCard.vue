<template>
  <div class="feature-card">
    <div class="feature-icon">
      <img :src="project.image" :alt="project.title" />
    </div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <div class="tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/composables/UseFeaturedProjects'

// terima project object sbg prop
defineProps<{
  project: Project
}>()
</script>

<style scoped>
.feature-card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #34495e;
}
</style>
