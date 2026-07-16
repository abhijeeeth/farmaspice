<template>
  <div class="bg-bg overflow-hidden pt-36 pb-24 grain-overlay">
    <!-- Header Block -->
    <section class="max-w-7xl mx-auto px-6 mb-20">
      <div class="border-b border-primary/5 pb-10">
        <div class="flex items-center gap-2 mb-4">
          <span class="h-[1px] w-6 bg-accent"></span>
          <span class="text-xs uppercase tracking-widest text-accent font-bold">Traceability Journey</span>
        </div>
        
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-dark tracking-tight leading-none">
            Manufacturing <span class="font-serif italic font-normal text-accent">Process</span>
          </h1>
          <p class="text-secondary-light font-sans max-w-md text-sm md:text-base leading-relaxed">
            Overview of our state-of-the-art agricultural processing, cleaning, and roasting capabilities.
          </p>
        </div>
      </div>
    </section>

    <!-- Connected Process Cards -->
    <section class="max-w-6xl mx-auto px-6 relative">
      <!-- Background connector line (hidden on mobile) -->
      <div class="absolute left-1/2 top-12 bottom-12 w-[1px] bg-primary/10 -translate-x-1/2 hidden md:block"></div>

      <div class="space-y-12 md:space-y-24">
        <!-- Step 1: Farm Procurement -->
        <div class="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-5 md:text-right flex flex-col md:items-end">
            <span class="font-display font-black text-5xl sm:text-6xl text-accent-gold/25 mb-2 select-none">01</span>
            <h3 class="text-2xl font-display font-bold text-primary-dark">Farm Procurement</h3>
            <p class="mt-3 text-sm text-secondary-dark/80 leading-relaxed font-sans max-w-md">
              Sourcing direct from certified Kerala farmer networks to ensure premium quality raw spices and cacao.
            </p>
          </div>
          
          <div class="md:col-span-2 flex justify-start md:justify-center relative">
            <div class="w-10 h-10 rounded-full bg-primary border-4 border-bg flex items-center justify-center text-white font-bold text-sm shadow-md z-10">
              ✓
            </div>
          </div>
          
          <div class="md:col-span-5">
            <div class="aspect-video overflow-hidden corner-asym-1 border border-primary/5 shadow-md">
              <img :src="heroImage" alt="Sourcing spices" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Step 2: Cleaning & Sorting -->
        <div class="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:flex-row-reverse">
          <div class="md:col-span-5 md:order-last">
            <span class="font-display font-black text-5xl sm:text-6xl text-accent-gold/25 mb-2 select-none">02</span>
            <h3 class="text-2xl font-display font-bold text-primary-dark">Cleaning & Sorting</h3>
            <p class="mt-3 text-sm text-secondary-dark/80 leading-relaxed font-sans max-w-md">
              Utilizing state-of-the-art grading machinery and physical sorting to guarantee maximum purity levels.
            </p>
          </div>
          
          <div class="md:col-span-2 flex justify-start md:justify-center relative md:order-2">
            <div class="w-10 h-10 rounded-full bg-accent border-4 border-bg flex items-center justify-center text-primary-dark font-bold text-sm shadow-md z-10">
              ★
            </div>
          </div>
          
          <div class="md:col-span-5 md:order-first">
            <div class="aspect-video overflow-hidden corner-asym-2 border border-primary/5 shadow-md">
              <img :src="cocoaImage" alt="Cleaning Spices" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Step 3: Roasting & Grinding -->
        <div class="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-5 md:text-right flex flex-col md:items-end">
            <span class="font-display font-black text-5xl sm:text-6xl text-accent-gold/25 mb-2 select-none">03</span>
            <h3 class="text-2xl font-display font-bold text-primary-dark">Roasting & Grinding</h3>
            <p class="mt-3 text-sm text-secondary-dark/80 leading-relaxed font-sans max-w-md">
              Precisely controlled temperature ranges lock in essential oil content, preserving deep flavor notes.
            </p>
          </div>
          
          <div class="md:col-span-2 flex justify-start md:justify-center relative">
            <div class="w-10 h-10 rounded-full bg-primary-light border-4 border-bg flex items-center justify-center text-white font-bold text-sm shadow-md z-10">
              ☀
            </div>
          </div>
          
          <div class="md:col-span-5">
            <div class="aspect-video overflow-hidden corner-asym-3 border border-primary/5 shadow-md">
              <!-- Using the same cocoa beans image with high contrast styles -->
              <img :src="cocoaImage" alt="Processing Grinding" class="w-full h-full object-cover grayscale contrast-125" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'
import cocoaImage from '@/assets/cocoa-beans.jpg'
import heroImage from '@/assets/hero.jpg'

useSEO({ title: 'Manufacturing', description: 'Manufacturing processes and supply chain.' })
</script>
