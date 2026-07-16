<template>
  <div class="bg-bg overflow-hidden pt-36 pb-24 grain-overlay">
    <!-- Storytelling Section -->
    <section class="max-w-7xl mx-auto px-6 mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text Content -->
        <div class="lg:col-span-7">
          <div class="flex items-center gap-2 mb-4">
            <span class="h-[1px] w-6 bg-accent"></span>
            <span class="text-xs uppercase tracking-widest text-accent font-bold">Our Story</span>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-dark tracking-tight leading-none mb-6">
            About <span class="font-serif italic font-normal text-accent">FarmSpice</span>
          </h1>

          <p class="text-lg text-secondary-dark/85 leading-relaxed font-sans mb-8">
            Company story, mission, vision, timeline, and growth milestones. This page is designed to build deep trust for distributors, wholesalers, manufacturers, and international partners.
          </p>

          <!-- Highlighted statistics inline -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-primary/5">
            <div class="p-4 bg-white/50 border border-white rounded-2xl">
              <div class="font-display font-black text-3xl text-accent-gold">30+</div>
              <div class="text-[10px] text-secondary-light font-bold uppercase tracking-wider mt-1">Years Sourcing</div>
            </div>
            <div class="p-4 bg-white/50 border border-white rounded-2xl">
              <div class="font-display font-black text-3xl text-accent-gold">100%</div>
              <div class="text-[10px] text-secondary-light font-bold uppercase tracking-wider mt-1">Ethical Farming</div>
            </div>
            <div class="p-4 bg-white/50 border border-white rounded-2xl">
              <div class="font-display font-black text-3xl text-accent-gold">10k+</div>
              <div class="text-[10px] text-secondary-light font-bold uppercase tracking-wider mt-1">Global Clients</div>
            </div>
          </div>
        </div>

        <!-- Overlapping Image Composition -->
        <div class="lg:col-span-5 relative flex items-center justify-center min-h-[350px]">
          <div class="absolute inset-4 border border-accent/20 corner-asym-2 translate-x-2 translate-y-2 pointer-events-none"></div>
          
          <div class="absolute w-[80%] aspect-video left-0 bottom-4 overflow-hidden corner-asym-1 shadow-lg group">
            <img :src="cocoaImage" alt="Cocoa sourcing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          
          <div class="absolute w-[60%] aspect-square right-0 top-4 overflow-hidden corner-asym-2 shadow-lg group">
            <img :src="heroImage" alt="Kerala farms" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline/Milestones Section -->
    <section class="max-w-6xl mx-auto px-6 border-t border-primary/5 pt-20">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-display font-bold text-primary-dark">
          Our <span class="font-serif italic font-normal text-accent">Milestones</span>
        </h2>
        <p class="text-xs uppercase tracking-widest text-secondary-light font-bold mt-2">Historical Timeline</p>
      </div>

      <Timeline :items="timeline" />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSEO } from '@/composables/useSEO'
import Timeline from '@/components/Timeline.vue'
import cocoaImage from '@/assets/cocoa-beans.jpg'
import heroImage from '@/assets/hero.jpg'

useSEO({ title: 'About', description: 'About FarmSpice — our mission, vision and history.' })

const timeline = ref([
  { title: 'Company Founded', date: '1995', desc: 'Started as a small procurer of spices in Kerala.' },
  { title: 'Manufacturing Expansion', date: '2008', desc: 'Opened modern processing and packaging facility.' },
  { title: 'Brand Launches', date: '2016', desc: 'CocoaBean and ValleySpice launched.' }
])
</script>
