<template>
  <footer class="bg-primary-dark text-white border-t border-white/5 relative overflow-hidden grain-overlay">
    <!-- Design accent divider -->
    <div class="h-1 bg-gradient-to-r from-accent to-primary-light"></div>
    
    <div class="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <!-- Brand identity section -->
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary-dark font-display font-extrabold text-lg shadow-lg">
                F
              </div>
              <span class="text-2xl font-display font-extrabold tracking-tight">FarmSpice</span>
            </div>
            <p class="mt-6 text-sm text-white/70 max-w-sm font-sans leading-relaxed">
              Farmspice Traders Private Limited — premium spices & cocoa sourced directly from Kerala farmers. Reimagining global agricultural sourcing with pure trust and modern craftsmanship.
            </p>
            <div class="mt-3 text-xs text-white/50 font-mono">
              GST: 32AADCF1099C1Z2
            </div>
          </div>
          
          <div class="mt-8 lg:mt-0 pt-4 text-xs text-white/40 tracking-wider">
            ESTABLISHED IN 1995 • KERALA, INDIA
          </div>
        </div>
        
        <!-- Navigation Section -->
        <div class="lg:col-span-3">
          <h4 class="font-display font-bold uppercase tracking-wider text-xs text-accent-gold mb-6">Explore</h4>
          <ul class="text-sm space-y-4 font-semibold text-white/80">
            <li>
              <router-link to="/about" class="hover:text-accent transition-colors">About Story</router-link>
            </li>
            <li>
              <router-link to="/manufacturing" class="hover:text-accent transition-colors">Our Process</router-link>
            </li>
            <li>
              <router-link to="/companies" class="hover:text-accent transition-colors">Sister Brands</router-link>
            </li>
            <li>
              <router-link to="/products" class="hover:text-accent transition-colors">Product Catalog</router-link>
            </li>
          </ul>
        </div>
        
        <!-- Contact/Office Details -->
        <div class="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h4 class="font-display font-bold uppercase tracking-wider text-xs text-accent-gold mb-6">Get in Touch</h4>
            <ul class="text-sm space-y-4 text-white/80">
              <li class="flex items-center gap-3">
                <span class="text-accent text-xs">✉</span>
                <a href="mailto:customercare@valleyspice.com" class="hover:text-accent transition-colors font-medium">customercare@valleyspice.com</a>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-accent text-xs">☎</span>
                <a href="tel:+918088315132" class="hover:text-accent transition-colors font-medium">+91 8088315132</a>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-accent text-xs mt-1">📍</span>
                <span class="text-white/70 leading-relaxed text-xs">
                  Ground Floor, Pottamkulam Central Building,<br>
                  Kalaketty, Kanjirapally,<br>
                  Kerala - 686508, India
                </span>
              </li>
            </ul>
          </div>
          
          <div class="mt-8 lg:mt-0 text-[10px] text-white/30 uppercase tracking-widest font-mono">
            MADE FOR GLOBAL DISTRIBUTORS
          </div>
        </div>
      </div>
      
      <!-- Bottom banner with oversized logo text background -->
      <div class="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <div>© 2026 FarmSpice. All rights reserved.</div>
        <div class="flex gap-6">
          <router-link to="/faq" class="hover:text-white transition-colors">FAQ</router-link>
          <router-link to="/contact" class="hover:text-white transition-colors">Partner Registry</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
