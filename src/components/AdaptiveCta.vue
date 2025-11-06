<script setup lang="ts">
import { ref, onMounted } from 'vue'

// tipe tipenya
type StatusType = 'available' | 'hired' | 'onVacation'
interface CtaConfig {
  message: string
  buttonText: string
  link: string
}

// reactive state
const isVisible = ref(false)
const status = ref<StatusType>('available')
const source = ref<string>('direct')
const ctaConfig = ref<CtaConfig | null>(null)

// helpers
function getVisitorSource(): string {
  const referrer = document.referrer.toLowerCase()
  const params = new URLSearchParams(window.location.search)
  if (params.has('utm_source')) return params.get('utm_source')!
  if (referrer.includes('linkedin')) return 'linkedin'
  if (referrer.includes('github')) return 'github'
  return 'direct'
}

async function fetchCurrentStatus(): Promise<StatusType> {
  try {
    const res = await fetch('/api/status')
    if (!res.ok) throw new Error('failed to fetch status')
    const data = await res.json()
    return data.status
  } catch (err) {
    console.error(err)
    return 'available'
  }
}

function getCtaVariant(source: string, status: StatusType): CtaConfig {
  if (status === 'onVacation')
    return {
      message: "I'm currently on vacation and will be back soon!",
      buttonText: 'Check Back Later',
      link: '#projects',
    }

  if (status === 'hired')
    return {
      message: "I'm currently hired for a project. Feel free to reach out!",
      buttonText: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/alexander-paulus-29738320a/',
    }

  switch (source) {
    case 'linkedin':
      return {
        message: 'Found me through LinkedIn?',
        buttonText: 'lets collaborate',
        link: '#contact',
      }
    case 'github':
      return { message: 'interested in my projects?', buttonText: 'hire me', link: '#contact' }
    default:
      return {
        message: 'interested in working together?',
        buttonText: 'contact me',
        link: '#contact',
      }
  }
}

function onHalfScroll(callback: () => void) {
  const trigger = () => {
    const scrolled = window.scrollY + window.innerHeight
    const half = document.body.scrollHeight / 2

    if (scrolled >= half) {
      callback()
      window.removeEventListener('scroll', trigger)
    }
  }
  window.addEventListener('scroll', trigger)
}

// lifecycle
onMounted(async () => {
  source.value = getVisitorSource()
  status.value = await fetchCurrentStatus()
  ctaConfig.value = getCtaVariant(source.value, status.value)

  onHalfScroll(() => {
    isVisible.value = true
  })
})
</script>

<template>
  <section
    id="cta-section"
    class="transition-opacity duration-500"
    :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
  >
    <div v-if="ctaConfig" class="max-w-xl mx-auto text-center py-10">
      <p class="text-lg mb-4">{{ ctaConfig.message }}</p>
      <a
        :href="ctaConfig.link"
        class="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        {{ ctaConfig.buttonText }}
      </a>
    </div>
  </section>
</template>

<style scoped>
#cta-section {
  opacity: 0;
}
</style>
