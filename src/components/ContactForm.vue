<script setup lang="ts">
import { ref, computed } from 'vue'
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

// TODO: Recaptcha not showing up properly
const captcha = ref(generateCaptcha())
const captchaAnswer = ref('')

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10)
  const b = Math.floor(Math.random() * 10)
  return { question: `${a} + ${b} =?`, answer: (a + b).toString() }
}

const isCaptchaCorrect = computed(() => captchaAnswer.value === captcha.value.answer)

async function handleSubmit() {
  // const token = await executeRecaptcha('contact_form')
  if (!isCaptchaCorrect.value) {
    alert('CAPTHCA failed')
    captcha.value = generateCaptcha()
    captchaAnswer.value = ''
  }
  alert('message sent (mockup)')
  console.log({
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  })
}
</script>

<template>
  <form class="contact-form" @submit="handleSubmit">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div class="form-group">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required />
    </div>

    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <button type="submit" class="submit-button">Send Message</button>
  </form>
</template>

<style scoped>
.contact-form {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}
</style>
