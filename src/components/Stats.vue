<template>
  <div class="grid grid-cols-3 gap-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-[0_12px_32px_rgba(0,0,0,0.2)] relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary-light/5 opacity-50 pointer-events-none"></div>
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="relative z-10 flex flex-col text-left"
    >
      <div class="font-display font-black text-2xl sm:text-3xl md:text-4xl text-accent-gold tracking-tight select-none">
        {{ stat.value }}
      </div>
      <div class="mt-2 text-[9px] sm:text-xs text-white/70 uppercase tracking-wider font-semibold font-sans leading-tight">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '10k+', label: 'Customers' },
  { value: '500+', label: 'Business Partners' }
]
</script>
