<template>
  <div
    class="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg"
    @click="$emit('click')"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="h-72 md:h-96 overflow-hidden">
        <img
          v-if="article.featuredImage"
          :src="article.featuredImage"
          :alt="article.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
          No image
        </div>
      </div>
      
      <div class="p-8 md:p-10">
        <div class="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
          Featured Article
        </div>
        
        <h2 class="text-3xl md:text-4xl font-serif text-gray-900 mb-4 line-clamp-3">
          {{ article.title }}
        </h2>
        
        <p class="text-gray-700 mb-6 line-clamp-3">{{ article.excerpt }}</p>
        
        <div class="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div class="flex items-center gap-4">
            <span class="font-medium">{{ article.author }}</span>
            <span>{{ formatDate(article.publishDate) }}</span>
          </div>
          <span class="text-accent font-semibold">{{ article.readingTime }} min read</span>
        </div>
        
        <button class="px-6 py-3 bg-accent text-[#212121] rounded-md font-medium hover:bg-opacity-90 transition-all">
          Read Full Article →
        </button>
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
