<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img :src="logo" alt="brand" class="w-full h-40 object-cover" />
    <div class="p-4">
      <h3 class="font-semibold">{{ title }}</h3>
      <p class="text-sm text-gray-600 mt-2">{{ subtitle }}</p>
      <div class="mt-4">
        <a :href="url" target="_blank" class="text-primary underline">Visit Website</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  url: String,
  logo: { type: String, default: '/src/assets/logo.svg' }
})
</script>
