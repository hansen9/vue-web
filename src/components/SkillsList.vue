<script setup lang="ts">
import { ref, computed } from 'vue'

interface Skill {
  id: number
  name: string
  level: number
  tags: string[]
}

// Mock API call - can be replaced with real API call later
const fetchSkills = async () => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return [
    { id: 1, name: 'Vue.js', level: 90, tags: ['frontend'] },
    { id: 2, name: 'React', level: 85, tags: ['frontend'] },
    { id: 3, name: 'TypeScript', level: 88, tags: ['frontend', 'backend'] },
    { id: 4, name: 'Node.js', level: 82, tags: ['backend'] },
    { id: 5, name: 'Express', level: 80, tags: ['backend'] },
    { id: 6, name: 'Docker', level: 75, tags: ['devops'] },
    { id: 7, name: 'Kubernetes', level: 70, tags: ['devops'] },
    { id: 8, name: 'MongoDB', level: 85, tags: ['backend'] },
    { id: 9, name: 'AWS', level: 78, tags: ['devops'] },
    { id: 10, name: 'CSS/SCSS', level: 92, tags: ['frontend'] },
  ]
}

const skills = ref<Skill[]>([])
const isLoading = ref(true)
const selectedTag = ref<string>('all')

const tags = ['all', 'frontend', 'backend', 'devops']

// Filter skills based on selected tag
const filteredSkills = computed(() => {
  if (selectedTag.value === 'all') {
    return skills.value
  }
  return skills.value.filter((skill) => skill.tags.includes(selectedTag.value))
})

// Load skills on component mount
const loadSkills = async () => {
  try {
    isLoading.value = true
    skills.value = await fetchSkills()
  } catch (error) {
    console.error('Error loading skills:', error)
  } finally {
    isLoading.value = false
  }
}

loadSkills()
</script>

<template>
  <div class="skills-list">
    <div class="skills-header">
      <h2>Technical Skills</h2>
      <div class="filter-container">
        <label for="tag-filter">Filter by:</label>
        <select id="tag-filter" v-model="selectedTag" class="tag-select">
          <option v-for="tag in tags" :key="tag" :value="tag">
            {{ tag.charAt(0).toUpperCase() + tag.slice(1) }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="isLoading" class="loading">Loading skills...</div>

    <div v-else class="skills-grid">
      <div v-for="skill in filteredSkills" :key="skill.id" class="skill-card">
        <div class="skill-info">
          <h3>{{ skill.name }}</h3>
          <div class="skill-tags">
            <span v-for="tag in skill.tags" :key="tag" class="tag" :class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="skill-level">
          <div class="progress-bar">
            <div
              class="progress"
              :style="{ width: `${skill.level}%` }"
              :title="`${skill.level}%`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-list {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skills-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.skills-header h2 {
  color: #42b883;
  margin: 0;
}

.filter-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tag-select {
  padding: 0.5rem 1rem;
  border: 2px solid #42b883;
  border-radius: 4px;
  background-color: white;
  color: #2c3e50;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s ease;
}

.tag-select:focus {
  border-color: #3aa876;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
}

.skill-info {
  margin-bottom: 1rem;
}

.skill-info h3 {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
}

.skill-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
}

.tag.frontend {
  background-color: #e9f5ff;
  color: #0078d4;
}

.tag.backend {
  background-color: #f0fff4;
  color: #38a169;
}

.tag.devops {
  background-color: #fff5f5;
  color: #e53e3e;
}

.skill-level {
  margin-top: 1rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #42b883;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.loading {
  text-align: center;
  color: #2c3e50;
  padding: 2rem;
}

@media (max-width: 768px) {
  .skills-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
