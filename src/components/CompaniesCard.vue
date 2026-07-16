<template>
  <div
    class="group relative overflow-visible rounded-none transition-all duration-500"
  >
    <!-- Background glow/depth effect -->
    <div class="absolute -inset-2 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none"></div>

    <!-- Image Container with Asymmetric Corners -->
    <div class="overflow-hidden corner-asym-1 border border-primary/5 bg-gray-50 relative aspect-[16/10] shadow-md">
      <img
        :src="logo"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
      />
      <!-- Soft Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent opacity-60"></div>
      
      <!-- Big numbering as a design element -->
      <div class="absolute top-4 left-4 font-display font-black text-4xl sm:text-5xl text-white/20 select-none tracking-tighter">
        {{ formattedIndex }}
      </div>

      <!-- Tag -->
      <span class="absolute top-4 right-4 bg-primary-dark/80 text-accent text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
        Brand
      </span>
    </div>

    <!-- Offset Text Content Block (Floating glass panel) -->
    <div class="relative -mt-10 mx-4 sm:mx-6 p-6 glass rounded-2xl border border-white/40 shadow-xl group-hover:border-accent/30 transition-all duration-500 group-hover:-translate-y-1">
      <h3 class="text-xl font-display font-bold text-primary-dark">
        {{ title }}
      </h3>

      <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-accent-gold">
        {{ subtitle }}
      </p>

      <div class="mt-5 flex items-center justify-between border-t border-primary/5 pt-4">
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-primary hover:text-accent-gold transition-colors focus:outline-none"
        >
          Explore Website
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 7l-10 10M8 7h9v9"
            />
          </svg>
        </a>

        <span class="text-[10px] text-secondary-light/60 font-bold uppercase tracking-widest font-mono">
          PARTNER
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import defaultLogo from '@/assets/logo.svg'

const props = defineProps({
  title: String,
  subtitle: String,
  url: String,
  logo: {
    type: String,
    default: defaultLogo,
  },
  index: {
    type: Number,
    default: 1
  }
});

const formattedIndex = computed(() => {
  return String(props.index).padStart(2, '0')
})
</script>