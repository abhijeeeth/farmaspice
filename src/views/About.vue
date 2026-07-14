<template>
  <section class="max-w-6xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">About FarmSpice</h1>
    <p class="mt-4 text-gray-700">Company story, mission, vision, timeline and growth milestones. This page is designed to build trust for distributors and partners.</p>
    <Timeline :items="timeline" class="mt-8" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useSEO } from '@/composables/useSEO'
import Timeline from '@/components/Timeline.vue'

useSEO({ title: 'About', description: 'About FarmSpice — our mission, vision and history.' })

const timeline = ref([
  { title: 'Company Founded', date: '1995', desc: 'Started as a small procurer of spices in Kerala.' },
  { title: 'Manufacturing Expansion', date: '2008', desc: 'Opened modern processing and packaging facility.' },
  { title: 'Brand Launches', date: '2016', desc: 'CocoaBean and ValleySpice launched.' }
])
</script>
