<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link || undefined"
    :target="link ? '_blank' : undefined"
    :rel="link ? 'noopener noreferrer' : undefined"
    class="group relative flex flex-col justify-between overflow-visible rounded-none transition-all duration-300 cursor-pointer block"
  >
    <!-- Asymmetric subtle background panel -->
    <div class="absolute -inset-1.5 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

    <div class="relative">
      <!-- Image frame with sharp and rounded mix -->
      <div class="aspect-square bg-white border border-primary/5 corner-asym-2 overflow-hidden relative shadow-sm">
        <img
          v-if="image"
          :src="image"
          :alt="title"
          class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-accent/10 text-accent-gold font-display font-bold">
          {{ title[0] }}
        </div>
        
        <!-- Subtle numbering in corner -->
        <div class="absolute top-3 left-3 bg-white/90 text-primary font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/5">
          {{ formattedIndex }}
        </div>

        <!-- External Link Icon Badge -->
        <div v-if="link" class="absolute top-3 right-3 bg-white/90 text-accent-gold p-1.5 rounded-full border border-primary/5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-sm">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="mt-4 px-1.5">
        <h4 class="font-display font-bold text-lg text-primary-dark tracking-tight line-clamp-1 group-hover:text-accent-gold transition-colors">
          {{ title }}
        </h4>
        <p class="text-xs uppercase tracking-wider text-secondary-light font-semibold mt-1 flex items-center justify-between">
          <span>{{ subtitle }}</span>
          <span v-if="link" class="text-[11px] text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Buy Now &rarr;
          </span>
        </p>
      </div>
    </div>
    
    <!-- Fine bottom aesthetic line -->
    <div class="w-full h-[1px] bg-primary/5 mt-4 group-hover:bg-accent/40 transition-colors"></div>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
  link: String,
  index: {
    type: Number,
    default: 1
  }
})

const formattedIndex = computed(() => {
  return String(props.index).padStart(2, '0')
})
</script>
