<template>
  <div>
    <Hero />
    <section class="max-w-7xl mx-auto px-6 py-16 fade-up">
      <h2 class="text-3xl font-serif">About FarmSpice</h2>
      <p class="mt-4 text-gray-700 max-w-3xl">FarmSpice sources premium spices and cocoa directly from Kerala farmers and supplies retail customers, wholesalers, exporters, manufacturers, and international businesses.</p>
    </section>

    <section class="bg-gray-50 py-16 fade-up">
      <div class="max-w-7xl mx-auto px-6">
        <h3 class="text-2xl font-semibold">Our Companies</h3>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CompaniesCard title="CocoaBean" subtitle="Premium Cocoa Products" url="https://www.cocoabean.in/" />
          <CompaniesCard title="ValleySpice" subtitle="Authentic Kerala Spices" url="https://valleyspice.com/" />
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16 fade-up">
      <h3 class="text-2xl font-semibold">Products</h3>
      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard title="Premium Cocoa Beans" subtitle="Bulk Supply" />
        <ProductCard title="Cocoa Powder" subtitle="Food Grade" />
        <ProductCard title="Black Pepper" subtitle="Grade A" />
        <ProductCard title="Cardamom" subtitle="Aroma Grade" />
      </div>
    </section>

    <section class="bg-gray-50 py-16 fade-up">
      <div class="max-w-7xl mx-auto px-6">
        <h3 class="text-2xl font-semibold">Testimonials</h3>
        <div class="mt-6"><Testimonials /></div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16 fade-up">
      <h3 class="text-2xl font-semibold">Contact</h3>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <MapWorld />
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
