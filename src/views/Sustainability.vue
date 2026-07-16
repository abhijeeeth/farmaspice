<template>
  <div class="bg-bg overflow-hidden pt-36 pb-24 grain-overlay">
    <!-- Header Block -->
    <section class="max-w-7xl mx-auto px-6 mb-20">
      <div class="border-b border-primary/5 pb-10">
        <div class="flex items-center gap-2 mb-4">
          <span class="h-[1px] w-6 bg-accent"></span>
          <span class="text-xs uppercase tracking-widest text-accent font-bold">Earth Care</span>
        </div>
        
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-dark tracking-tight leading-none">
            Our <span class="font-serif italic font-normal text-accent">Sustainability</span>
          </h1>
          <p class="text-secondary-light font-sans max-w-md text-sm md:text-base leading-relaxed">
            Commitment to ecological restoration, farmer welfare, and responsible production systems.
          </p>
        </div>
      </div>
    </section>

    <!-- Asymmetrical Grid of Sustainability Pillars -->
    <section class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <!-- Card 1 -->
        <div class="p-8 bg-white/40 border border-primary/5 rounded-3xl flex flex-col justify-between hover:shadow-md hover:border-accent/20 transition-all duration-300">
          <div>
            <div class="font-display font-black text-4xl text-accent-gold/20 mb-6 select-none">01</div>
            <h3 class="text-2xl font-display font-bold text-primary-dark mb-4">Farmer Support</h3>
            <p class="text-secondary-dark/85 text-sm leading-relaxed font-sans font-normal">
              Direct economic assistance, training in organic cultivation, and fair pricing mechanisms for over 1,500 families in our Kerala farmer network.
            </p>
          </div>
          <div class="w-full h-[1px] bg-primary/5 mt-8"></div>
        </div>

        <!-- Card 2 -->
        <div class="p-8 bg-[#1B4332] text-white rounded-3xl flex flex-col justify-between shadow-xl md:translate-y-4">
          <div>
            <div class="font-display font-black text-4xl text-accent/35 mb-6 select-none">02</div>
            <h3 class="text-2xl font-display font-bold text-white mb-4">Eco-Packaging</h3>
            <p class="text-white/80 text-sm leading-relaxed font-sans font-normal">
              Completely biodegradable shipping bags and lightweight, recyclable bulk containers designed to reduce post-consumer packaging waste.
            </p>
          </div>
          <div class="w-full h-[1px] bg-white/10 mt-8"></div>
        </div>

        <!-- Card 3 -->
        <div class="p-8 bg-[#3E2723] text-white rounded-3xl flex flex-col justify-between shadow-xl mt-8 md:mt-0">
          <div>
            <div class="font-display font-black text-4xl text-accent/35 mb-6 select-none">03</div>
            <h3 class="text-2xl font-display font-bold text-white mb-4">Water Conservation</h3>
            <p class="text-white/80 text-sm leading-relaxed font-sans font-normal">
              Drip irrigation networks, rainwater harvesting at our processing facilities, and zero liquid discharge systems protect Kerala's aquifers.
            </p>
          </div>
          <div class="w-full h-[1px] bg-white/10 mt-8"></div>
        </div>

        <!-- Card 4 -->
        <div class="p-8 bg-white/40 border border-primary/5 rounded-3xl flex flex-col justify-between hover:shadow-md hover:border-accent/20 transition-all duration-300 md:translate-y-4 mt-8 md:mt-0">
          <div>
            <div class="font-display font-black text-4xl text-accent-gold/20 mb-6 select-none">04</div>
            <h3 class="text-2xl font-display font-bold text-primary-dark mb-4">Ethical Sourcing Practices</h3>
            <p class="text-secondary-dark/85 text-sm leading-relaxed font-sans font-normal">
              Zero tolerance for child labor, complete tracking from farm plot to buyer, and proactive preservation of tropical biodiversity hotspots.
            </p>
          </div>
          <div class="w-full h-[1px] bg-primary/5 mt-8"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'
useSEO({ title: 'Sustainability', description: 'Sustainability initiatives and farmer support.' })
</script>
