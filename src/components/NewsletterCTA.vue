<template>
  <div class="bg-gradient-to-r from-primary to-secondary rounded-lg px-8 py-12 md:px-12 md:py-16 text-center">
    <h2 class="text-2xl md:text-3xl font-serif text-white mb-4">Stay Updated</h2>
    <p class="text-white/90 max-w-2xl mx-auto mb-8">
      Get the latest insights on spices, cocoa, sustainability, and food manufacturing delivered to your inbox.
    </p>
    
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto flex gap-2">
      <input
        v-model="email"
        type="email"
        placeholder="your@email.com"
        required
        class="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        :disabled="isSubmitting"
        class="px-6 py-3 bg-accent text-[#212121] rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
      </button>
    </form>
    
    <p class="text-white/70 text-xs mt-4">We respect your privacy. No spam, ever.</p>
    
    <div v-if="successMessage" class="mt-4 text-green-200 font-medium">{{ successMessage }}</div>
    <div v-if="errorMessage" class="mt-4 text-red-200 font-medium">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''
  
  try {
    // Simulate API call - in production, this would connect to your newsletter service
    await new Promise(resolve => setTimeout(resolve, 500))
    
    successMessage.value = 'Thank you for subscribing!'
    email.value = ''
    
    // Clear message after 5 seconds
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (error) {
    errorMessage.value = 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
