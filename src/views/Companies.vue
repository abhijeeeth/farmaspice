<template>
  <section class="max-w-7xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">Our Companies</h1>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <CompaniesCard title="CocoaBean" subtitle="Premium Cocoa Products" url="https://www.cocoabean.in/" />
      <CompaniesCard title="ValleySpice" subtitle="Authentic Kerala Spices" url="https://valleyspice.com/" />
    </div>
  </section>
</template>

<script setup>
import CompaniesCard from '@/components/CompaniesCard.vue'
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Our Companies', description: 'CocoaBean and ValleySpice — brands under FarmSpice.' })
</script>
