<template>
  <div class="overflow-hidden bg-bg">
    <Hero />

    <!-- SECTION 01: About FarmSpice -->
    <section class="relative py-24 sm:py-32 overflow-hidden bg-bg">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        <!-- Asymmetrical Left column: Big Serial Number & Heading -->
        <div class="lg:col-span-5 flex items-start gap-4">
          <div class="font-display font-black text-6xl md:text-7xl text-accent-gold/40 select-none leading-none">
            01
          </div>
          <div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-dark tracking-tight leading-[1.1] mb-4">
              About <br>
              <span class="font-serif italic font-normal text-accent">FarmSpice</span>
            </h2>
            <div class="w-12 h-1 bg-accent rounded-full mt-4"></div>
          </div>
        </div>

        <!-- Right column: Telling description -->
        <div class="lg:col-span-7 lg:pl-8">
          <p class="text-lg md:text-xl font-sans text-secondary-dark/80 leading-relaxed font-normal">
            FarmSpice sources premium spices and cocoa directly from Kerala farmers and supplies retail customers, wholesalers, exporters, manufacturers, and international businesses.
          </p>
          <div class="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
            <span>SUSTAINABILITY FIRST</span>
            <span class="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
            <span>DIRECT TRACEABILITY</span>
          </div>
        </div>
      </div>
      
      <!-- Architectural faint line -->
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-primary/5 draw-line"></div>
    </section>

    <!-- SECTION 02: Our Companies -->
    <section class="relative py-28 sm:py-36 bg-gradient-to-tr from-[#161C19] via-primary-dark to-[#221A16] text-white grain-overlay">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Asymmetrical layout header -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div class="flex items-start gap-4">
            <div class="font-display font-black text-6xl text-white/10 select-none leading-none">02</div>
            <div>
              <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
                Our <span class="font-serif italic font-normal text-accent">Sister Brands</span>
              </h3>
              <p class="mt-2 text-xs uppercase tracking-[0.2em] text-accent font-bold">Specialized Verticals</p>
            </div>
          </div>
          <p class="text-white/70 max-w-md text-sm leading-relaxed">
            Delivering authentic Kerala spices and custom-roasted premium cocoa products to consumers and industrial partners worldwide.
          </p>
        </div>

        <!-- Alternating/Asymmetric Cards Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div class="md:translate-y-4">
            <CompaniesCard :index="1" title="CocoaBean" subtitle="Premium Cocoa Products" url="https://www.cocoabean.in/" logo="/src/assets/cocoa-beans.jpg" />
          </div>
          <div class="md:-translate-y-4 mt-8 md:mt-0">
            <CompaniesCard :index="2" title="ValleySpice" subtitle="Authentic Kerala Spices" url="https://valleyspice.com/" logo="/src/assets/hero.jpg" />
          </div>
        </div>
      </div>

      <!-- Accent bottom divider curve -->
      <div class="divider-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>

    <!-- SECTION 03: Products -->
    <section class="py-24 sm:py-32 bg-bg relative">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Header -->
        <div class="flex items-start gap-4 mb-16">
          <div class="font-display font-black text-6xl text-accent-gold/40 select-none leading-none">03</div>
          <div>
            <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-primary-dark">
              Featured <span class="font-serif italic font-normal text-accent">Product Showcase</span>
            </h3>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-secondary-light font-bold">Industrial Portfolio</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ProductCard :index="1" title="Premium Cocoa Beans" subtitle="Bulk Supply" image="/src/assets/cocoa-beans.jpg" />
          <ProductCard :index="2" title="Cocoa Powder" subtitle="Food Grade" image="/src/assets/cocoa-beans.jpg" />
          <ProductCard :index="3" title="Black Pepper" subtitle="Grade A" image="/src/assets/cocoa-beans.jpg" />
          <ProductCard :index="4" title="Cardamom" subtitle="Aroma Grade" image="/src/assets/cocoa-beans.jpg" />
        </div>
      </div>
    </section>

    <!-- SECTION 04: Testimonials -->
    <section class="py-24 bg-accent/10 relative overflow-hidden grain-overlay">
      <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(circle at 20% 50%, #C8A97E 0%, transparent 60%);"></div>
      
      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <div class="flex items-start gap-4 mb-12">
          <div class="font-display font-black text-6xl text-accent-gold/50 select-none leading-none">04</div>
          <div>
            <h3 class="text-3xl font-display font-bold tracking-tight text-primary-dark">
              Trusted By <span class="font-serif italic font-normal text-accent">Global Brands</span>
            </h3>
          </div>
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </section>

    <!-- SECTION 05: Contact -->
    <section class="py-24 sm:py-32 bg-bg border-t border-primary/5">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Header -->
        <div class="flex items-start gap-4 mb-16">
          <div class="font-display font-black text-6xl text-accent-gold/40 select-none leading-none">05</div>
          <div>
            <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-primary-dark">
              Start Sourcing <span class="font-serif italic font-normal text-accent">Directly</span>
            </h3>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-secondary-light font-bold">Wholesale Partnerships</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div class="lg:col-span-7 glass p-8 rounded-3xl border border-white/50 shadow-xl">
            <ContactForm />
          </div>
          <div class="lg:col-span-5 h-full min-h-[300px] overflow-hidden corner-asym-2 border border-primary/5 shadow-xl relative">
            <MapWorld class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'
import Hero from '@/components/Hero.vue'
import CompaniesCard from '@/components/CompaniesCard.vue'
import ProductCard from '@/components/ProductCard.vue'  
import Testimonials from '@/components/Testimonials.vue'
import ContactForm from '@/components/ContactForm.vue'
import MapWorld from '@/components/MapWorld.vue'

useSEO({ title: 'Home', description: 'FarmSpice — Premium spices and cocoa from Kerala.' })
</script>
