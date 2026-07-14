<template>
  <img :src="src" :alt="alt" loading="lazy" class="w-full h-full object-cover" />
</template>

<script setup>
defineProps({ src: String, alt: String })
</script>
