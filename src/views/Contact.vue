<template>
  <section class="max-w-6xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">Contact</h1>
    <p class="mt-4 text-gray-700">Let's build something great together — reach out for partnerships or bulk enquiries.</p>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ContactForm />
      <div>
        <h4 class="font-semibold">Office</h4>
        <p class="text-sm text-gray-600 mt-2">Kerala, India</p>
        <p class="text-sm text-gray-600">Email: info@farmaspice.com</p>
        <div class="mt-4"><MapWorld /></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
import MapWorld from '@/components/MapWorld.vue'
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Contact', description: 'Contact FarmSpice for partnerships, exports and wholesale.' })
</script>
