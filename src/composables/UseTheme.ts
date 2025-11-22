import { ref, watchEffect, onMounted } from 'vue'

const THEME_KEY = 'theme-mode'
const theme = ref<'light' | 'dark'>('light')

export function useTheme() {
  //load dari localStorage atw sistem
  const getInitialTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'

    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light' || saved === 'dark') return saved

    const prefersDark = window.matchMedia('(prefers-color-scheme:dark').matches
    return prefersDark ? 'dark' : 'light'
  }

  const applyTheme = (mode: 'light' | 'dark') => {
    if (typeof window === 'undefined') return
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.setItem(THEME_KEY, mode)
  }

  // inisialisasi
  onMounted(() => {
    theme.value = getInitialTheme()
    applyTheme(theme.value)
  })

  // auto-apply tiap ada perubahan theme
  watchEffect(() => applyTheme(theme.value))

  return { theme, applyTheme }
}
