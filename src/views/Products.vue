<template>
  <section class="max-w-7xl mx-auto px-6 pt-36 pb-24 relative overflow-visible bg-bg grain-overlay">
    <!-- Header Block -->
    <div class="border-b border-primary/5 pb-10 mb-16">
      <div class="flex items-center gap-2 mb-4">
        <span class="h-[1px] w-6 bg-accent"></span>
        <span class="text-xs uppercase tracking-widest text-accent font-bold">Catalog</span>
      </div>
      
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-dark tracking-tight leading-none">
          Our <span class="font-serif italic font-normal text-accent">Products</span>
        </h1>
        <p class="text-secondary-light font-sans max-w-md text-sm md:text-base leading-relaxed">
          Premium product categories offered for bulk, private label, and OEM customers worldwide.
        </p>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
      <ProductCard :index="1" title="Cocoa Powder" subtitle="Food Grade" :image="cocoaImage" />
      <ProductCard :index="2" title="Cocoa Butter" subtitle="Cosmetic Grade" :image="cocoaImage" />
      <ProductCard :index="3" title="Black Pepper" subtitle="Bulk" :image="heroImage" />
      <ProductCard :index="4" title="Cardamom" subtitle="Aromatic" :image="heroImage" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useSEO } from '@/composables/useSEO'
import cocoaImage from '@/assets/cocoa-beans.jpg'
import heroImage from '@/assets/hero.jpg'

useSEO({ title: 'Products', description: 'FarmSpice product portfolio — cocoa and spices.' })
</script>
