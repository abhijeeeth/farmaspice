<template>
  <section class="max-w-6xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">Quality Assurance</h1>
    <p class="mt-4 text-gray-700">Details on quality testing, certifications and traceability.</p>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded shadow">FSSAI</div>
      <div class="bg-white p-6 rounded shadow">ISO / HACCP</div>
      <div class="bg-white p-6 rounded shadow">Organic / Export Ready</div>
    </div>
  </section>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Quality', description: 'Quality assurance, certifications and testing.' })
</script>
