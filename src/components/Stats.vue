<template>
  <div class="grid w-full grid-cols-1 gap-3 rounded-2xl border border-white/25 bg-white/5 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-md sm:grid-cols-3 sm:gap-4 sm:p-5 lg:p-6">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="rounded-xl bg-white/60 px-4 py-4 text-center ring-1 ring-black/5 sm:bg-transparent sm:ring-0"
    >
      <div class="text-3xl font-semibold tracking-tight text-white/75 md:text-4xl">{{ stat.value }}</div>
      <div class="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/50">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '10000+', label: 'Customers' },
  { value: '500+', label: 'Business Partners' }
]
</script>
