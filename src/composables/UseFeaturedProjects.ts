import { ref, onMounted } from 'vue'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  featured: boolean
  featuredOrder?: number
}

export function useFeaturedProjects() {
  const projects = ref<Project[]>([])
  const featuredProjects = ref<Project[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchProjects = async () => {
    try {
      const response = await fetch('/data/projects.json')
      if (!response.ok) throw new Error('failed to fetch projects')
      const data: Project[] = await response.json()

      // filter setiap projects yang pnya `featured: true`
      featuredProjects.value = data.filter((p: Project) => p.featured)

      //simpan list utuh
      projects.value = data
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = String(err)
      }
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchProjects)

  return { projects, featuredProjects, loading, error }
}
