<template>
  <div
    class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
    @click="$emit('click')"
  >
    <div class="h-48 overflow-hidden bg-gray-100 relative">
      <img
        v-if="article.featuredImage"
        :src="article.featuredImage"
        :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-400">No image</div>
      <div class="absolute top-4 right-4">
        <span class="bg-accent text-[#212121] text-xs font-semibold px-3 py-1 rounded-full">
          {{ article.category }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">{{ article.title }}</h3>
      <p class="text-gray-600 text-sm line-clamp-2 mb-4">{{ article.excerpt }}</p>
      
      <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
        <span>{{ formatDate(article.publishDate) }}</span>
        <span>{{ article.readingTime }} min read</span>
      </div>
      
      <button
        class="text-accent font-medium text-sm hover:text-primary transition-colors"
      >
        Read More →
      </button>
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
