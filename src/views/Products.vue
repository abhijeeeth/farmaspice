<template>
  <section class="max-w-7xl mx-auto px-6 py-16 fade-up">
    <h1 class="text-3xl font-serif">Products</h1>
    <p class="mt-4 text-gray-700">Premium product categories offered for bulk, private label and OEM customers.</p>
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard title="Cocoa Powder" subtitle="Food Grade" />
      <ProductCard title="Cocoa Butter" subtitle="Cosmetic Grade" />
      <ProductCard title="Black Pepper" subtitle="Bulk" />
      <ProductCard title="Cardamom" subtitle="Aromatic" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Products', description: 'FarmSpice product portfolio — cocoa and spices.' })
</script>
