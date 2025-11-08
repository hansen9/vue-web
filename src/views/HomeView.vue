<script setup lang="ts">
// Home view component logic here
import { onMounted, computed } from 'vue'
import { useFeaturedProjects } from '@/composables/UseFeaturedProjects'
import { useUserProfile } from '@/composables/UseUserProfile'
import { useI18n } from 'vue-i18n'

// composables
import ProjectCard from '@/components/ProjectCard.vue'
import AdaptiveCta from '@/components/AdaptiveCta.vue'

// components
import CertificationsSection from '@/components/CertificationsSection.vue'
import SandBox from '@/components/SandBox.vue'

const { t } = useI18n()
const { userProfile, isAvailable } = useUserProfile()
const { featuredProjects, loading, error } = useFeaturedProjects()
const availableText = computed(() => (isAvailable() ? 'Available' : ' busy'))

onMounted(() => {
  // optional analytics, scroll rest, etc
  console.log('HomeView mounted')
})
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to My Website</h1>
        <p class="hero-text">
          Discover amazing content and services that will transform your experience
        </p>
        <router-link to="/contact" class="cta-button">Get Started</router-link>
      </div>
    </section>
    <section>
      <SandBox />
    </section>

    <section>
      <h1>{{ t('home.greeting') }}</h1>
      <button>{{ t('home.cta') }}</button>
    </section>

    <section id="featured">
      <h2>Featured Projects</h2>

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>

      <div v-else class="feature-grid">
        <ProjectCard v-for="p in featuredProjects" :key="p.id" :project="p" />
      </div>
    </section>
    <AdaptiveCta />

    <section class="availability">
      <div v-if="userProfile">
        <p class="text-lg font-semibold">{{ availableText }}</p>
      </div>
    </section>

    <CertificationsSection />
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #42b883 0%, #2c3e50 100%);
  border-radius: 12px;
  margin-bottom: 4rem;
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
}

.hero-text {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: white;
  color: #42b883;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

/* Features Section */
.features {
  margin-bottom: 4rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

/* Why Us Section */
.why-us {
  padding: 4rem 0;
}

.why-us h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
}

.why-us-content {
  max-width: 800px;
  margin: 0 auto;
}

.why-us-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
}

.benefits-list {
  margin-top: 2rem;
  padding-left: 1.5rem;
}

.benefits-list li {
  margin-bottom: 1rem;
  color: #34495e;
  position: relative;
  padding-left: 1.5rem;
}

.benefits-list li::before {
  content: '✓';
  color: #42b883;
  position: absolute;
  left: -1.5rem;
  font-weight: bold;
}
/* availability section */
.availability {
  margin-top: 2rem;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-text {
    font-size: 1.1rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .why-us-content {
    padding: 0 1rem;
  }
}
</style>
