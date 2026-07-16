<template>
  <div
    class="bg-white/50 border border-primary/5 rounded-3xl p-6 md:p-8 cursor-pointer group transition-all duration-500 hover:shadow-xl hover:border-accent/20"
    @click="$emit('click')"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <!-- Image frame with asymmetrical corners -->
      <div class="lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px] overflow-hidden corner-asym-1 relative shadow-md">
        <img
          v-if="article.featuredImage"
          :src="article.featuredImage"
          :alt="article.title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
          No Image
        </div>
        
        <!-- Premium Tag float -->
        <div class="absolute bottom-4 left-4">
          <span class="glass text-primary-dark text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/30 shadow-md">
            Featured Insight
          </span>
        </div>
      </div>
      
      <!-- Content column -->
      <div class="lg:col-span-5 flex flex-col justify-center">
        <div class="flex items-center gap-3 text-[10px] text-accent font-extrabold uppercase tracking-widest font-mono mb-4">
          <span>{{ article.category }}</span>
          <span class="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
          <span>{{ article.readingTime }} MIN READ</span>
        </div>
        
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-primary-dark tracking-tight leading-[1.1] mb-5 group-hover:text-accent-gold transition-colors duration-300">
          {{ article.title }}
        </h2>
        
        <p class="text-secondary-dark/85 text-sm sm:text-base leading-relaxed mb-6 font-sans font-normal">
          {{ article.excerpt }}
        </p>
        
        <div class="flex items-center gap-4 text-xs text-secondary-light font-bold mb-8 pt-4 border-t border-primary/5">
          <span>By {{ article.author }}</span>
          <span class="w-1 h-1 bg-primary/20 rounded-full"></span>
          <span>{{ formatDate(article.publishDate) }}</span>
        </div>
        
        <div>
          <button class="px-6 py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-primary-light hover:shadow-md">
            Read Full Article →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>
