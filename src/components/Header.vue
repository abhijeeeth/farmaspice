<template>
  <header class="sticky top-0 z-40 bg-white/60 backdrop-blur-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <!-- <img src="/src/assets/logo.svg" alt="FarmSpice" class="w-12 h-12 rounded-md" /> -->
        <div>
          <div class="text-lg font-bold text-green-900">FarmSpice</div>
          <div class="text-xs text-gray-500">Premium Spices & Cocoa</div>
        </div>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <router-link to="/" class="text-sm hover:text-primary">Home</router-link>
        <router-link to="/about" class="text-sm hover:text-primary">About</router-link>
        <router-link to="/manufacturing" class="text-sm hover:text-primary">Manufacturing</router-link>
        <router-link to="/companies" class="text-sm hover:text-primary">Our Companies</router-link>
        <router-link to="/products" class="text-sm hover:text-primary">Products</router-link>
        <router-link to="/blog" class="text-sm hover:text-primary">Blog</router-link>
        <router-link to="/faq" class="text-sm hover:text-primary">FAQ</router-link>
        <router-link to="/contact" class="ml-4 px-4 py-2 bg-primary text-white rounded-md">Contact</router-link>
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
