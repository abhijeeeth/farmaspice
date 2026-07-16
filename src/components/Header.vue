<template>
  <header class="fixed top-4 left-0 right-0 z-50 px-4">
    <div class="max-w-7xl mx-auto glass rounded-full px-6 py-3.5 flex items-center justify-between border border-white/20 shadow-[0_12px_40px_rgba(27,67,50,0.08)] transition-all duration-300 hover:border-accent/30">
      <router-link to="/" class="flex items-center gap-3 group focus:outline-none">
        <div class="relative w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold shadow-inner transition-transform group-hover:scale-105">
          F
          <span class="absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 bg-accent-gold rounded-full border-2 border-white"></span>
        </div>
        <div class="leading-none">
          <div class="text-base font-display font-bold tracking-tight text-primary-dark">FarmSpice</div>
          <div class="text-[9px] text-secondary-light uppercase tracking-wider font-semibold mt-0.5">Kerala Excellence</div>
        </div>
      </router-link>

      <nav class="hidden md:flex items-center gap-8">
        <router-link to="/" class="nav-link text-xs uppercase tracking-wider font-semibold text-primary-dark/80 hover:text-primary transition-colors relative py-1">Home</router-link>
        <router-link to="/about" class="nav-link text-xs uppercase tracking-wider font-semibold text-primary-dark/80 hover:text-primary transition-colors relative py-1">About</router-link>
        <router-link to="/manufacturing" class="nav-link text-xs uppercase tracking-wider font-semibold text-primary-dark/80 hover:text-primary transition-colors relative py-1">Process</router-link>
        <router-link to="/companies" class="nav-link text-xs uppercase tracking-wider font-semibold text-primary-dark/80 hover:text-primary transition-colors relative py-1">Brands</router-link>
        <router-link to="/products" class="nav-link text-xs uppercase tracking-wider font-semibold text-primary-dark/80 hover:text-primary transition-colors relative py-1">Products</router-link>
        <router-link to="/blog" class="nav-link text-xs uppercase tracking-wider font-semibold text-primary-dark/80 hover:text-primary transition-colors relative py-1">Insights</router-link>
        <router-link to="/faq" class="nav-link text-xs uppercase tracking-wider font-semibold text-primary-dark/80 hover:text-primary transition-colors relative py-1">FAQ</router-link>
        <router-link to="/contact" class="ml-4 px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">Contact</router-link>
      </nav>

      <div class="md:hidden">
        <MobileMenu />
      </div>
    </div>
  </header>
</template>

<script setup>
import MobileMenu from './MobileMenu.vue'
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #C8A97E;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(-50%);
}
.nav-link:hover::after,
.router-link-active.nav-link::after {
  width: 100%;
}
.router-link-active.nav-link {
  color: #1B4332;
}
</style>
