<template>
  <div class="space-y-6">
    <div v-for="(item, idx) in items" :key="idx" class="flex gap-4 items-start">
      <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
      <div>
        <div class="font-semibold">{{ item.title }}</div>
        <div class="text-sm text-gray-600">{{ item.date }}</div>
        <p class="mt-2 text-sm text-gray-700">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ items: { type: Array, default: () => [] } })
const items = props.items
</script>
