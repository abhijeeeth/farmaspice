<template>
  <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
    <div class="h-36 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
      <img v-if="image" :src="image" :alt="title" class="object-cover w-full h-full" />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-400">No image</div>
    </div>
    <h4 class="mt-4 font-semibold">{{ title }}</h4>
    <p class="text-sm text-gray-600 mt-2">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({ title: String, subtitle: String, image: String })
</script>
