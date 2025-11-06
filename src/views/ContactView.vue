<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you. Please fill out the form below or use our contact information.
        </p>

        <div class="contact-details">
          <div class="contact-item">
            <strong>Address:</strong>
            <p>123 Vue Street, Web City, 12345</p>
          </div>
          <div class="contact-item">
            <strong>Email:</strong>
            <p>contact@example.com</p>
          </div>
          <div class="contact-item">
            <strong>Phone:</strong>
            <p>+1 (555) 123-4567</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
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

.contact-info p {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
}

.contact-item strong {
  color: #2c3e50;
  display: block;
  margin-bottom: 0.3rem;
}

.contact-item p {
  margin: 0;
  color: #34495e;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.submit-button {
  background-color: #42b883;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #3aa876;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: 2;
  }

  .contact-form {
    order: 1;
  }
}
</style>
