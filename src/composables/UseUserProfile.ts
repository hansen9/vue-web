import { ref, onMounted } from 'vue'

interface UserProfile {
  name: string
  availability: boolean
  careerStart: string
}

const userProfile = ref<UserProfile | null>(null)

export function useUserProfile() {
  const fetchProfile = async () => {
    const res = await fetch('/data/userProfile.json')
    userProfile.value = await res.json()
  }

  onMounted(fetchProfile)

  const isAvailable = () => userProfile.value?.availability === true

  return { userProfile, isAvailable }
}
