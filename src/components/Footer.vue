<template>
  <footer class="border-t border-gray-100 bg-white">
    <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <img src="/src/assets/logo.svg" class="w-14 h-14" />
        <p class="mt-4 text-sm text-gray-600">FarmSpice — premium spices & cocoa sourced from Kerala farmers.</p>
      </div>
      <div>
        <h4 class="font-semibold">Company</h4>
        <ul class="mt-3 text-sm text-gray-600 space-y-2">
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/manufacturing">Manufacturing</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold">Contact</h4>
        <p class="mt-3 text-sm text-gray-600">Email: info@farmaspice.com</p>
        <p class="text-sm text-gray-600">Phone: +91 12345 67890</p>
      </div>
    </div>
    <div class="bg-gray-50 text-center py-4 text-sm text-gray-500">© 2026 FarmSpice. All rights reserved.</div>
  </footer>
</template>

<script setup>
</script>
