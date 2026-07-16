<template>
  <div
    class="group cursor-pointer flex flex-col justify-between overflow-visible bg-white/50 border border-primary/5 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500"
    @click="$emit('click')"
  >
    <div>
      <!-- Image frame (magazine card) -->
      <div class="aspect-[16/10] overflow-hidden corner-asym-1 bg-gray-100 relative shadow-inner">
        <img
          v-if="article.featuredImage"
          :src="article.featuredImage"
          :alt="article.title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
        />
        <div v-else class="w-full h-full flex items-center justify-center text-gray-400 font-bold font-sans">No Image</div>
        
        <!-- Category tag (glass pill) -->
        <div class="absolute top-3 right-3">
          <span class="glass text-primary-dark text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
            {{ article.category }}
          </span>
        </div>
      </div>

      <!-- Text block -->
      <div class="mt-5 px-1">
        <div class="flex items-center gap-4 text-[10px] text-secondary-light font-bold uppercase tracking-widest font-mono mb-3">
          <span>{{ formatDate(article.publishDate) }}</span>
          <span class="w-1 h-1 bg-accent-gold rounded-full"></span>
          <span>{{ article.readingTime }} MIN READ</span>
        </div>

        <h3 class="text-xl font-display font-bold text-primary-dark line-clamp-2 leading-tight group-hover:text-accent-gold transition-colors duration-300">
          {{ article.title }}
        </h3>
        
        <p class="text-sm text-secondary-dark/80 line-clamp-2 mt-2 leading-relaxed font-sans font-normal">
          {{ article.excerpt }}
        </p>
      </div>
    </div>

    <!-- Footer button -->
    <div class="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between px-1">
      <span class="text-xs uppercase tracking-wider font-extrabold text-primary group-hover:text-accent-gold transition-colors">
        Read Article
      </span>
      <span class="text-xs text-accent transition-transform group-hover:translate-x-1">→</span>
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
