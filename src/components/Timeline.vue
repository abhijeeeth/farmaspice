<template>
  <div class="relative py-12">
    <!-- Central connecting vertical line -->
    <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary-light transform -translate-x-[1px]"></div>

    <div class="space-y-16">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="relative flex flex-col md:flex-row items-start md:items-center justify-between"
        :class="{ 'md:flex-row-reverse': idx % 2 === 1 }"
      >
        <!-- Connector Dot -->
        <div class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg transform -translate-x-2 z-10 shadow-md"></div>

        <!-- Left Column (or Right Column, depending on alternating index) -->
        <div class="w-full md:w-[45%] pl-12 md:pl-0 flex flex-col" :class="idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'">
          <!-- Big year -->
          <div class="font-display font-black text-4xl sm:text-5xl text-accent-gold select-none tracking-tight">
            {{ item.date }}
          </div>
        </div>

        <!-- Right Column / Content Node (Floating glass block) -->
        <div class="w-full md:w-[45%] pl-12 md:pl-0 mt-4 md:mt-0">
          <div class="glass p-6 rounded-2xl border border-white/50 shadow-md hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
            <h4 class="font-display font-bold text-lg text-primary-dark">
              {{ item.title }}
            </h4>
            <p class="mt-2 text-sm text-secondary-dark/80 leading-relaxed font-sans">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>
