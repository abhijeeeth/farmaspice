<template>
  <section class="max-w-7xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">Blog</h1>
    <p class="mt-4 text-gray-700">Latest articles about sourcing, sustainability and industry trends.</p>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded shadow p-4">Article 1 — Read More</div>
      <div class="bg-white rounded shadow p-4">Article 2 — Read More</div>
      <div class="bg-white rounded shadow p-4">Article 3 — Read More</div>
    </div>
  </section>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Blog', description: 'Insights and news from FarmSpice.' })
</script>
