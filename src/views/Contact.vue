<template>
  <div class="bg-bg overflow-hidden pt-36 pb-24 grain-overlay">
    <!-- Header Block -->
    <section class="max-w-7xl mx-auto px-6 mb-20">
      <div class="border-b border-primary/5 pb-10">
        <div class="flex items-center gap-2 mb-4">
          <span class="h-[1px] w-6 bg-accent"></span>
          <span class="text-xs uppercase tracking-widest text-accent font-bold">Contact</span>
        </div>
        
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-dark tracking-tight leading-none">
            Get in <span class="font-serif italic font-normal text-accent">Touch</span>
          </h1>
          <p class="text-secondary-light font-sans max-w-md text-sm md:text-base leading-relaxed">
            Let's build something great together — reach out for corporate partnerships, export contracts, or bulk wholesale inquiries.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content layout -->
    <section class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <!-- Form Column -->
        <div class="lg:col-span-7 glass p-8 sm:p-10 rounded-3xl border border-white/50 shadow-xl">
          <h3 class="text-2xl font-display font-bold text-primary-dark mb-4">Send a Message</h3>
          <ContactForm />
        </div>

        <!-- Office Details & Map Column -->
        <div class="lg:col-span-5 flex flex-col justify-between gap-8">
          <div class="p-8 bg-[#1B4332] text-white rounded-3xl shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
            <!-- Subtle accent block in background -->
            <div class="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-accent/15 blur-xl"></div>
            
            <div>
              <span class="text-[10px] text-accent font-bold uppercase tracking-wider">Corporate Headquarters</span>
              <h4 class="text-2xl font-display font-bold text-white mt-4 mb-2">Farmspice Traders Private Limited</h4>
              <p class="text-white/80 text-sm leading-relaxed font-sans mt-4">
                Ground Floor,<br>
                Pottamkulam Central Building,<br>
                Kalaketty,<br>
                Kanjirapally,<br>
                Kerala - 686508,<br>
                India
              </p>
              <p class="text-white/80 text-sm font-sans mt-4">
                Phone: <a href="tel:+918088315132" class="text-accent hover:underline">+91 8088315132</a>
              </p>
              <p class="text-white/80 text-sm font-sans mt-2">
                Email: <a href="mailto:customercare@valleyspice.com" class="text-accent hover:underline">customercare@valleyspice.com</a>
              </p>
              <p class="text-white/60 text-xs font-mono mt-4">
                GST: 32AADCF1099C1Z2
              </p>
            </div>
            
            <div class="mt-8 text-xs text-white/40 tracking-wider">
              REGULATED BY EXPORT DEVELOPMENT COUNCILS
            </div>
          </div>

          <!-- Asymmetric Map border frame -->
          <div class="h-64 sm:h-72 overflow-hidden corner-asym-2 border border-primary/5 shadow-md">
            <MapWorld class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
import MapWorld from '@/components/MapWorld.vue'
import { useSEO } from '@/composables/useSEO'
useSEO({
  title: 'Contact',
  description: 'Contact FarmSpice for partnerships, exports and wholesale.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Farmspice Traders Private Limited',
    'image': 'https://farmspice.com/src/assets/logo.svg',
    '@id': 'https://farmspice.com/#localbusiness',
    'url': 'https://farmspice.com',
    'telephone': '+918088315132',
    'email': 'customercare@valleyspice.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Ground Floor, Pottamkulam Central Building, Kalaketty',
      'addressLocality': 'Kanjirapally',
      'addressRegion': 'Kerala',
      'postalCode': '686508',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '9.5666756',
      'longitude': '76.7725902'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+918088315132',
      'contactType': 'customer service',
      'email': 'customercare@valleyspice.com',
      'areaServed': 'IN',
      'availableLanguage': ['en']
    }
  }
})
</script>
