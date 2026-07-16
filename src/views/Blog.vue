<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-36 pb-16 bg-bg grain-overlay border-b border-primary/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-2 mb-4">
          <span class="h-[1px] w-6 bg-accent"></span>
          <span class="text-xs uppercase tracking-widest text-accent font-bold">Knowledge</span>
        </div>
        
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-dark tracking-tight leading-none">
            Insights & <span class="font-serif italic font-normal text-accent">Resources</span>
          </h1>
          <p class="text-secondary-light font-sans max-w-md text-sm md:text-base leading-relaxed">
            Discover expert insights about Kerala spices, premium cocoa, sustainable farming, food manufacturing, and global trade.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <!-- Featured Article -->
      <FeaturedPost
        v-if="featuredArticle"
        :article="featuredArticle"
        class="mb-16"
        @click="goToArticle(featuredArticle)"
      />

      <!-- Search and Filters -->
      <div class="mb-12">
        <BlogSearch
          v-model="searchQuery"
          :suggestions="searchSuggestions"
          @select="goToArticle"
        />
      </div>

      <div class="mb-8">
        <h3 class="text-sm font-semibold text-gray-600 mb-4 uppercase">Filter by Category</h3>
        <CategoryFilter
          :categories="blogCategories"
          :selected-category="selectedCategory"
          @select="selectedCategory = $event"
        />
      </div>

      <!-- Articles Grid -->
      <div v-if="filteredAndSearchedArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <BlogCard
          v-for="article in paginatedArticles"
          :key="article.id"
          :article="article"
          @click="goToArticle(article)"
        />
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg">No articles found matching your search.</p>
      </div>

      <!-- Pagination -->
      <Pagination
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        @prev="currentPage = Math.max(1, currentPage - 1)"
        @next="currentPage = Math.min(totalPages, currentPage + 1)"
        @go="currentPage = $event"
      />

      <!-- Newsletter CTA -->
      <div class="mt-20">
        <NewsletterCTA />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSEO } from '@/composables/useSEO'
import { blogArticles, blogCategories } from '@/data/blogArticles'
import BlogCard from '@/components/BlogCard.vue'
import FeaturedPost from '@/components/FeaturedPost.vue'
import BlogSearch from '@/components/BlogSearch.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import Pagination from '@/components/Pagination.vue'
import NewsletterCTA from '@/components/NewsletterCTA.vue'

const router = useRouter()

// SEO
useSEO({
  title: 'Blog - Insights & Resources',
  description: 'Discover expert insights about Kerala spices, cocoa, sustainability, and food manufacturing from FarmSpice.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'FarmSpice Blog',
    description: 'Insights and resources about premium spices and cocoa'
  }
})

// State
const searchQuery = ref('')
const selectedCategory = ref(null)
const currentPage = ref(1)
const articlesPerPage = 9

// Computed
const featuredArticle = computed(() => blogArticles[0])

const searchSuggestions = computed(() => {
  if (!searchQuery.value) return []
  return blogArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filteredArticles = computed(() => {
  return blogArticles.filter(article => {
    if (selectedCategory.value && article.category !== selectedCategory.value) return false
    if (searchQuery.value && !article.title.toLowerCase().includes(searchQuery.value.toLowerCase())) return false
    return true
  })
})

const filteredAndSearchedArticles = computed(() => filteredArticles.value)

const totalPages = computed(() => Math.ceil(filteredAndSearchedArticles.value.length / articlesPerPage))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage
  const end = start + articlesPerPage
  return filteredAndSearchedArticles.value.slice(start, end)
})

// Methods
const goToArticle = (article) => {
  router.push({ name: 'BlogDetail', params: { slug: article.slug } })
}

// Reset pagination when filters change
const resetPagination = () => {
  currentPage.value = 1
}

// Watch for filter changes
onMounted(() => {
  // Scroll to top
  window.scrollTo(0, 0)
})
</script>
