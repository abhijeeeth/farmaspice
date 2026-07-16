<template>
  <div class="relative">
    <button
      @click="open = !open"
      aria-label="menu"
      class="p-2.5 rounded-full hover:bg-black/5 transition-colors focus:outline-none flex items-center justify-center"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        class="text-primary-dark transition-transform duration-300"
        :class="{ 'rotate-90': open }"
      >
        <line x1="3" y1="12" x2="21" y2="12" v-if="!open"></line>
        <line x1="3" y1="6" x2="21" y2="6" :class="{ 'translate-y-1.5 rotate-45 transform origin-center': open }"></line>
        <line x1="3" y1="18" x2="21" y2="18" :class="{ '-translate-y-1.5 -rotate-45 transform origin-center': open }"></line>
      </svg>
    </button>
    
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
    >
      <div
        v-if="open"
        class="absolute right-0 top-14 w-60 glass rounded-2xl shadow-xl border border-white/30 p-5 z-50 flex flex-col gap-1.5"
      >
        <router-link to="/" @click="open = false" class="mobile-nav-link">Home</router-link>
        <router-link to="/about" @click="open = false" class="mobile-nav-link">About</router-link>
        <router-link to="/manufacturing" @click="open = false" class="mobile-nav-link">Process</router-link>
        <router-link to="/companies" @click="open = false" class="mobile-nav-link">Our Brands</router-link>
        <router-link to="/products" @click="open = false" class="mobile-nav-link">Products</router-link>
        <router-link to="/blog" @click="open = false" class="mobile-nav-link">Insights</router-link>
        <router-link to="/faq" @click="open = false" class="mobile-nav-link">FAQ</router-link>
        <router-link
          to="/contact"
          @click="open = false"
          class="mt-3 block text-center px-4 py-2.5 bg-primary text-white text-xs uppercase tracking-wider font-bold rounded-full hover:bg-primary-light transition-all"
        >
          Contact Us
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1B0E0A;
  transition: all 200ms;
}
.mobile-nav-link:hover,
.router-link-active.mobile-nav-link {
  background-color: rgba(200, 169, 126, 0.15);
  color: #1B4332;
  padding-left: 1.25rem;
}
</style>
