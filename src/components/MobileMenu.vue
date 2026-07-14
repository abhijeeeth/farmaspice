<template>
  <div>
    <button @click="open = !open" aria-label="menu" class="p-2">
      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="#111" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
    <div v-if="open" class="absolute right-4 top-16 bg-white shadow-lg rounded-md p-4 w-56">
      <router-link to="/" class="block py-2">Home</router-link>
      <router-link to="/about" class="block py-2">About</router-link>
      <router-link to="/companies" class="block py-2">Our Companies</router-link>
      <router-link to="/products" class="block py-2">Products</router-link>
      <router-link to="/contact" class="block py-2">Contact</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
