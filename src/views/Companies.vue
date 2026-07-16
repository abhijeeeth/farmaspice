<template>
  <div class="bg-bg overflow-hidden pt-36 pb-24 grain-overlay">
    <!-- Header Block -->
    <section class="max-w-7xl mx-auto px-6 mb-20">
      <div class="border-b border-primary/5 pb-10">
        <div class="flex items-center gap-2 mb-4">
          <span class="h-[1px] w-6 bg-accent"></span>
          <span class="text-xs uppercase tracking-widest text-accent font-bold">Brands</span>
        </div>
        
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-dark tracking-tight leading-none">
            Our <span class="font-serif italic font-normal text-accent">Companies</span>
          </h1>
          <p class="text-secondary-light font-sans max-w-md text-sm md:text-base leading-relaxed">
            Delivering authentic Kerala spices and premium roasted cocoa through specialized consumer and industrial brands.
          </p>
        </div>
      </div>
    </section>

    <!-- Brands Grid -->
    <section class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <CompaniesCard :index="1" title="CocoaBean" subtitle="Premium Cocoa Products" url="https://www.cocoabean.in/" logo="/src/assets/cocoa-beans.jpg" />
        <CompaniesCard :index="2" title="ValleySpice" subtitle="Authentic Kerala Spices" url="https://valleyspice.com/" logo="/src/assets/hero.jpg" />
      </div>
    </section>
  </div>
</template>

<script setup>
import CompaniesCard from '@/components/CompaniesCard.vue'
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Our Companies', description: 'CocoaBean and ValleySpice — brands under FarmSpice.' })
</script>
