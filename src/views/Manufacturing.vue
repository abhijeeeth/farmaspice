<template>
  <section class="max-w-6xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">Manufacturing</h1>
    <p class="mt-4 text-gray-700">Overview of the manufacturing process and capabilities.</p>
    <Timeline :items="process" class="mt-8" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Timeline from '@/components/Timeline.vue'
import { useSEO } from '@/composables/useSEO'

useSEO({ title: 'Manufacturing', description: 'Manufacturing processes and supply chain.' })

const process = ref([
  { title: 'Farm Procurement', date: '', desc: 'Sourcing direct from farmer networks.' },
  { title: 'Cleaning & Sorting', date: '', desc: 'State-of-the-art cleaning and sorting equipment.' },
  { title: 'Roasting & Grinding', date: '', desc: 'Controlled processes for consistent quality.' }
])
</script>
