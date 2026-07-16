<template>
  <section class="relative min-h-[92svh] flex items-center overflow-hidden pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-[#121A16] via-primary-dark to-[#1F1410] grain-overlay">
    <!-- Subtle architectural background accents -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent blur-[120px]"></div>
      <div class="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-primary-light blur-[100px]"></div>
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 80px 80px;"></div>
    </div>

    <!-- Floating Accent element -->
    <div class="absolute top-24 right-12 z-20 hidden xl:flex items-center gap-3 glass-dark px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-accent tracking-widest uppercase scale-reveal">
      <span class="w-2 h-2 bg-accent-gold rounded-full animate-ping"></span>
      Direct Kerala Sourcing
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left side: Typography & Call to Actions -->
      <div class="lg:col-span-7 text-white flex flex-col justify-center">
        <!-- Section label -->
        <div class="flex items-center gap-2 mb-6">
          <span class="h-[1px] w-8 bg-accent"></span>
          <span class="text-xs uppercase tracking-[0.3em] text-accent font-bold">Premium Spices & Cocoa</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6">
          From Kerala Farms <br>
          <span class="font-serif italic font-normal text-accent">to Global</span> <br>
          Industries.
        </h1>
        
        <p class="text-white/80 text-base md:text-lg max-w-xl mb-10 font-sans leading-relaxed">
          Premium spices and cocoa sourced directly from Kerala farmer networks, processed under controlled systems, and supplied to global trade.
        </p>

        <!-- CTA buttons - Unique custom design -->
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
          <router-link to="/contact" class="group relative px-8 py-4 bg-accent hover:bg-accent-gold text-primary-dark text-sm uppercase tracking-wider font-extrabold rounded-none corner-asym-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(200,169,126,0.3)] hover:-translate-y-1">
            Buy Wholesale
            <span class="absolute right-3 top-3 text-xs opacity-40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </router-link>
          
          <router-link to="/companies" class="px-8 py-4 border-2 border-white/10 hover:border-accent text-white text-sm uppercase tracking-wider font-bold rounded-none corner-asym-2 transition-all duration-300 bg-white/5 hover:bg-white/10">
            Explore Our Brands
          </router-link>
        </div>

        <!-- Asymmetric Stats Integration -->
        <div class="w-full max-w-xl">
          <Stats />
        </div>
      </div>

      <!-- Right side: Beautiful Asymmetric Overlapping Image Composition -->
      <div class="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
        <!-- Background Frame -->
        <div class="absolute inset-4 border border-accent/20 corner-asym-1 translate-x-3 translate-y-3 pointer-events-none"></div>

        <!-- Primary Image (Cocoa Beans / Spices) -->
        <div class="absolute w-[70%] aspect-[3/4] left-0 bottom-4 overflow-hidden corner-asym-1 border border-white/10 shadow-2xl transition-all duration-700 hover:scale-102 hover:z-30 group">
          <img
            :src="cocoaImage"
            alt="Kerala Cocoa Beans Sourcing"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-wider">
            Premium Cocoa
          </div>
        </div>

        <!-- Secondary Image (Harvest Fields / Spices Hero) -->
        <div class="absolute w-[65%] aspect-[3/4] right-0 top-4 overflow-hidden corner-asym-2 border border-white/10 shadow-2xl transition-all duration-700 hover:scale-102 hover:z-30 group">
          <img
            :src="heroImage"
            alt="Kerala Spice Procurement"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div class="absolute bottom-4 right-4 text-white text-xs font-bold uppercase tracking-wider">
            Authentic Spices
          </div>
        </div>

        <!-- Floating visual label -->
        <div class="absolute bottom-20 right-4 glass px-5 py-4 text-primary-dark font-display font-extrabold text-sm corner-asym-3 shadow-lg max-w-[140px] text-center rotate-6 hover:rotate-0 transition-transform duration-300">
          <div class="text-accent-gold text-xs uppercase tracking-wider font-bold mb-1">Traceability</div>
          100% Sourced
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Stats from './Stats.vue'
import heroImage from '@/assets/hero.jpg'
import cocoaImage from '@/assets/cocoa-beans.jpg'
</script>

<style scoped>
</style>
