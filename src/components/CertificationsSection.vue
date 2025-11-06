<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Certification } from '@/types/certifications'

const certifications = ref<Certification[]>()

onMounted(async () => {
  const res = await fetch('/data/userProfile.json')
  const data = await res.json()
  certifications.value = data.certifications
})
</script>

<template>
  <section>
    <h2>Certifications</h2>
    <ul>
      <li v-for="cert in certifications" :key="cert.id">
        <strong>{{ cert.title }}</strong> — {{ cert.issuer }}
        <small>({{ new Date(cert.issuedDate).getFullYear() }})</small>
        <a v-if="cert.credentialUrl" :href="cert.credentialUrl" target="_blank">
          View credential
        </a>
      </li>
    </ul>
  </section>
</template>
