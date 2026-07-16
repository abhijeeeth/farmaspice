<template>
  <div class="divide-y divide-primary/5">
    <div
      v-for="item in items"
      :key="item.id"
      class="py-6 transition-all duration-300"
    >
      <button
        @click="toggleItem(item.id)"
        class="w-full flex items-center justify-between text-left group focus:outline-none"
      >
        <h3
          class="font-display font-bold text-lg sm:text-xl text-primary-dark transition-colors group-hover:text-accent-gold"
          :class="{ 'text-accent-gold': expandedItems.includes(item.id) }"
        >
          {{ item.question }}
        </h3>
        
        <!-- Premium +/- Rotator Icon -->
        <span class="relative w-5 h-5 flex items-center justify-center flex-shrink-0 ml-4">
          <span
            class="absolute w-4 h-[2px] bg-accent transition-transform duration-300"
            :class="{ 'rotate-90': !expandedItems.includes(item.id) }"
          ></span>
          <span class="absolute w-4 h-[2px] bg-accent"></span>
        </span>
      </button>
      
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="expandedItems.includes(item.id)" class="overflow-hidden">
          <div class="pt-4 pb-2 pr-6">
            <p class="text-secondary-dark/85 leading-relaxed font-sans text-sm sm:text-base font-normal">
              {{ item.answer }}
            </p>
          </div>
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
