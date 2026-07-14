<template>
  <form class="max-w-xl grid gap-4" @submit.prevent="submit">
    <input v-model="form.name" placeholder="Name" class="p-3 border rounded" required />
    <input v-model="form.company" placeholder="Company" class="p-3 border rounded" />
    <input v-model="form.email" type="email" placeholder="Email" class="p-3 border rounded" required />
    <textarea v-model="form.message" rows="5" placeholder="Message" class="p-3 border rounded"></textarea>
    <button class="px-4 py-2 bg-primary text-white rounded">Send Message</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ name: '', company: '', email: '', message: '' })
function submit() {
  // In production hook this to an API or Netlify function. We'll log for now.
  console.log('Contact form submitted', { ...form })
  alert('Thanks — we will get back to you shortly.')
}
</script>
