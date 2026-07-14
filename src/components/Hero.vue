<template>
  <section class="relative flex min-h-[82svh] items-center overflow-hidden py-20 sm:py-24 lg:min-h-[88svh]">
    <img src="/src/assets/hero.jpg" alt="Kerala Cocoa Pod" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 text-white">
      <h1 class="text-4xl md:text-6xl font-serif leading-tight">From Kerala Farms to Global Industries.</h1>
      <p class="mt-4 text-lg max-w-2xl">Premium spices and cocoa sourced directly from farmers and supplied worldwide.</p>
      <div class="mt-8 flex gap-4">
        <router-link to="/contact" class="px-6 py-3 bg-accent text-[#212121] rounded-md font-medium">Buy Wholesale</router-link>
        <router-link to="/companies" class="px-6 py-3 border border-white rounded-md">Explore Our Brands</router-link>
      </div>
    </div>
    <div class="absolute bottom-4 left-1/2 z-20 w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 sm:bottom-6 sm:w-[calc(100%-3rem)] lg:bottom-8">
      <Stats />
    </div>
  </section>
</template>

<script setup>
import Stats from './Stats.vue'
</script>
