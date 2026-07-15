<template>
  <div class="relative mb-8">
    <div class="relative">
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Search FAQs..."
        class="w-full px-5 py-4 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition text-lg"
      />
      <svg
        class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
    <div v-if="modelValue && results.length > 0" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
      <button
        v-for="faq in results"
        :key="faq.id"
        @click="$emit('select', faq)"
        class="w-full text-left px-5 py-4 hover:bg-gray-50 transition border-b border-gray-100 last:border-b-0"
      >
        <div class="font-medium text-gray-900">{{ faq.question }}</div>
        <div class="text-gray-500 text-sm mt-1">{{ faq.category }}</div>
      </button>
    </div>
    
    <div v-else-if="modelValue && results.length === 0" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 p-6 text-center">
      <p class="text-gray-500">No FAQs found matching your search.</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  results: {
    type: Array,
    default: () => []
  }
})

defineEmits(['update:modelValue', 'select'])
</script>
