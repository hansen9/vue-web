<script setup lang="ts">
import SkillsList from '../components/SkillsList.vue'
</script>

<template>
  <div class="about">
    <h1>About Us</h1>
    <section class="about-content">
      <div class="about-section">
        <h2>Who We Are</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco.
        </p>
      </div>

      <div class="about-section">
        <h2>Our Mission</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>

      <div class="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>Excellence in everything we do</li>
          <li>Customer satisfaction is our priority</li>
          <li>Innovation and creativity</li>
          <li>Integrity and transparency</li>
        </ul>
      </div>

      <div class="about-section">
        <SkillsList />
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.about-content {
  margin-top: 2rem;
}

.about-section {
  margin-bottom: 3rem;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

h2 {
  color: #42b883;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

p {
  color: #34495e;
  line-height: 1.6;
  font-size: 1.1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: #34495e;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

li::before {
  content: '•';
  color: #42b883;
  font-weight: bold;
  margin-right: 1rem;
}
</style>
