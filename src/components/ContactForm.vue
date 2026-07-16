<template>
  <form class="grid gap-6 py-4" @submit.prevent="submit">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="flex flex-col">
        <label class="text-[10px] font-bold uppercase tracking-wider text-secondary-light mb-1">Full Name</label>
        <input v-model="form.name" placeholder="E.g., John Doe" class="py-3 border-b border-primary/20 bg-transparent text-primary-dark placeholder-primary-dark/30 focus:outline-none focus:border-accent transition-colors" required />
      </div>
      <div class="flex flex-col">
        <label class="text-[10px] font-bold uppercase tracking-wider text-secondary-light mb-1">Company</label>
        <input v-model="form.company" placeholder="E.g., Cocoa Ltd" class="py-3 border-b border-primary/20 bg-transparent text-primary-dark placeholder-primary-dark/30 focus:outline-none focus:border-accent transition-colors" />
      </div>
    </div>
    
    <div class="flex flex-col">
      <label class="text-[10px] font-bold uppercase tracking-wider text-secondary-light mb-1">Email Address</label>
      <input v-model="form.email" type="email" placeholder="john@example.com" class="py-3 border-b border-primary/20 bg-transparent text-primary-dark placeholder-primary-dark/30 focus:outline-none focus:border-accent transition-colors" required />
    </div>

    <div class="flex flex-col">
      <label class="text-[10px] font-bold uppercase tracking-wider text-secondary-light mb-1">Your Message</label>
      <textarea v-model="form.message" rows="4" placeholder="How can we help your business?" class="py-3 border-b border-primary/20 bg-transparent text-primary-dark placeholder-primary-dark/30 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
    </div>

    <div class="mt-4">
      <button class="px-8 py-4 bg-primary hover:bg-primary-light text-white text-xs uppercase tracking-wider font-extrabold rounded-none corner-asym-1 transition-all duration-300 hover:shadow-lg">
        Send Inquiry
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ name: '', company: '', email: '', message: '' })
function submit() {
  console.log('Contact form submitted', { ...form })
  alert('Thanks — we will get back to you shortly.')
  form.name = ''
  form.company = ''
  form.email = ''
  form.message = ''
}
</script>
