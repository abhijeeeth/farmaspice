<template>
  <div class="flex items-center justify-center gap-2 mt-8">
    <button
      @click="$emit('prev')"
      :disabled="currentPage === 1"
      :class="[
        'px-4 py-2 rounded-lg font-medium transition-all',
        currentPage === 1
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]"
    >
      ← Previous
    </button>
    
    <div class="flex items-center gap-1">
      <button
        v-for="page in pages"
        :key="page"
        @click="$emit('go', page)"
        :class="[
          'w-10 h-10 rounded-lg font-medium transition-all',
          page === currentPage
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        {{ page }}
      </button>
    </div>
    
    <button
      @click="$emit('next')"
      :disabled="currentPage === totalPages"
      :class="[
        'px-4 py-2 rounded-lg font-medium transition-all',
        currentPage === totalPages
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]"
    >
      Next →
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  maxButtons: {
    type: Number,
    default: 5
  }
})

defineEmits(['prev', 'next', 'go'])

const pages = computed(() => {
  const { currentPage, totalPages, maxButtons } = props
  const pages = []
  let start = Math.max(1, currentPage - Math.floor(maxButtons / 2))
  const end = Math.min(totalPages, start + maxButtons - 1)
  
  if (end - start < maxButtons - 1) {
    start = Math.max(1, end - maxButtons + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})
</script>
