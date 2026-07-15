<template>
  <div class="flex flex-wrap gap-2">
    <button
      @click="$emit('select', null)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-all',
        !selectedCategory
          ? 'bg-primary text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]"
    >
      All Articles
    </button>
    
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('select', category)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-all',
        selectedCategory === category
          ? 'bg-primary text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    default: null
  }
})

defineEmits(['select'])
</script>
