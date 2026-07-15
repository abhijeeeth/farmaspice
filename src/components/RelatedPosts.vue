<template>
  <div class="mt-16">
    <h2 class="text-2xl md:text-3xl font-serif mb-8">Related Articles</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="article in relatedArticles"
        :key="article.id"
        class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer group"
        @click="$emit('read', article)"
      >
        <div class="h-40 overflow-hidden bg-gray-100 rounded-t-lg">
          <img
            v-if="article.featuredImage"
            :src="article.featuredImage"
            :alt="article.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="p-4">
          <span class="text-xs font-semibold text-accent">{{ article.category }}</span>
          <h3 class="text-base font-semibold text-gray-900 mt-2 line-clamp-2">{{ article.title }}</h3>
          <p class="text-sm text-gray-600 mt-2 line-clamp-2">{{ article.excerpt }}</p>
          <div class="text-xs text-gray-500 mt-3">{{ formatDate(article.publishDate) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  relatedArticles: {
    type: Array,
    required: true
  }
})

defineEmits(['read'])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>
