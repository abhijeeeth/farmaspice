<template>
  <div class="space-y-3">
    <div
      v-for="item in items"
      :key="item.id"
      class="border border-gray-200 rounded-lg overflow-hidden hover:border-accent transition-colors"
    >
      <button
        @click="toggleItem(item.id)"
        class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
      >
        <h3 class="font-semibold text-gray-900 text-lg">{{ item.question }}</h3>
        <svg
          :class="[
            'w-5 h-5 text-accent transition-transform flex-shrink-0',
            expandedItems.includes(item.id) ? 'rotate-180' : ''
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-300 ease-in"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="expandedItems.includes(item.id)" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p class="text-gray-700 leading-relaxed">{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})

const expandedItems = ref([])

const toggleItem = (itemId) => {
  const index = expandedItems.value.indexOf(itemId)
  if (index > -1) {
    expandedItems.value.splice(index, 1)
  } else {
    expandedItems.value.push(itemId)
  }
}
</script>
