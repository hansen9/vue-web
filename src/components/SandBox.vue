<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('Alex')
const lastName = ref('Hansen')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    const parts = newValue.split(' ')
    firstName.value = parts[0] || ''
    lastName.value = parts[1] || ''
  },
})
</script>

<template>
  <div>{{ fullName }}</div>
</template>
