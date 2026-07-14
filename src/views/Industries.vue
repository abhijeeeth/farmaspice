<template>
  <section class="max-w-7xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">Industries</h1>
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded shadow">Chocolate Industry</div>
      <div class="bg-white p-6 rounded shadow">Food Manufacturing</div>
      <div class="bg-white p-6 rounded shadow">Cosmetics</div>
      <div class="bg-white p-6 rounded shadow">Retail & Wholesale</div>
    </div>
  </section>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Industries', description: 'Industries served by FarmSpice.' })
</script>
