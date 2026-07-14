<template>
  <section class="relative h-[80vh] flex items-center">
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
      <source src="/src/assets/hero.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-white">
      <h1 class="text-4xl md:text-6xl font-serif leading-tight">From Kerala Farms to Global Industries.</h1>
      <p class="mt-4 text-lg max-w-2xl">Premium spices and cocoa sourced directly from farmers and supplied worldwide.</p>
      <div class="mt-8 flex gap-4">
        <router-link to="/contact" class="px-6 py-3 bg-accent text-[#212121] rounded-md font-medium">Become a Partner</router-link>
        <router-link to="/companies" class="px-6 py-3 border border-white rounded-md">Explore Our Brands</router-link>
      </div>
    </div>
    <div class="absolute bottom-8 left-6 z-20">
      <Stats />
    </div>
  </section>
</template>

<script setup>
import Stats from './Stats.vue'
</script>
