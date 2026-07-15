<template>
  <div v-if="article">
    <!-- Breadcrumb Navigation -->
    <nav class="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600">
      <router-link to="/" class="text-accent hover:text-primary">Home</router-link>
      <span class="mx-2">/</span>
      <router-link to="/blog" class="text-accent hover:text-primary">Blog</router-link>
      <span class="mx-2">/</span>
      <span class="text-gray-400">{{ article.title }}</span>
    </nav>

    <!-- Hero Section -->
    <section class="relative h-96 md:h-screen max-h-[600px] overflow-hidden bg-gray-900">
      <img
        v-if="article.featuredImage"
        :src="article.featuredImage"
        :alt="article.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 flex flex-col justify-center">
        <div class="max-w-4xl mx-auto px-6 text-white">
          <span class="inline-block bg-accent text-[#212121] text-sm font-bold px-4 py-2 rounded-full mb-4">
            {{ article.category }}
          </span>
          <h1 class="text-4xl md:text-6xl font-serif leading-tight mb-4">{{ article.title }}</h1>
          <div class="flex items-center gap-6 text-sm">
            <span>{{ article.author }}</span>
            <span>{{ formatDate(article.publishDate) }}</span>
            <span>{{ article.readingTime }} min read</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <article class="max-w-4xl mx-auto px-6 py-16">
      <!-- Table of Contents (optional, for longer articles) -->
      <nav v-if="article.content.includes('<h2') || article.content.includes('<h3')" class="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-gray-900 mb-4">Table of Contents</h3>
        <ul class="space-y-2 text-sm text-gray-700">
          <li><a href="#" class="text-accent hover:text-primary">Overview</a></li>
          <li v-for="(section, idx) in 3" :key="idx" class="ml-4">
            <a href="#" class="text-accent hover:text-primary">Section {{ section }}</a>
          </li>
        </ul>
      </nav>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-accent prose-a:no-underline hover:prose-a:text-primary prose-blockquote:border-accent prose-blockquote:text-gray-700">
        <div v-html="article.content"></div>
      </div>

      <!-- Author Info -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-semibold text-accent">
            {{ article.author.charAt(0) }}
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">{{ article.author }}</h4>
            <p class="text-gray-600 text-sm">Expert contributor at FarmSpice</p>
          </div>
        </div>
      </div>

      <!-- Tags -->
      <div class="mt-8 flex flex-wrap gap-2">
        <a
          v-for="tag in article.tags"
          :key="tag"
          href="#"
          class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition"
        >
          #{{ tag }}
        </a>
      </div>

      <!-- Share Buttons -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <h3 class="font-semibold text-gray-900 mb-4">Share this article</h3>
        <div class="flex gap-4">
          <a
            href="#"
            title="Share on Facebook"
            class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition"
          >
            <span class="text-lg">f</span>
          </a>
          <a
            href="#"
            title="Share on Twitter"
            class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-400 hover:text-white flex items-center justify-center transition"
          >
            <span class="text-lg">𝕏</span>
          </a>
          <a
            href="#"
            title="Share on LinkedIn"
            class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
          >
            <span class="text-lg">in</span>
          </a>
          <a
            href="#"
            title="Copy link"
            class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          >
            <span class="text-lg">🔗</span>
          </a>
        </div>
      </div>

      <!-- Previous and Next Navigation -->
      <div v-if="previousArticle || nextArticle" class="mt-16 pt-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
        <router-link
          v-if="previousArticle"
          :to="{ name: 'BlogDetail', params: { slug: previousArticle.slug } }"
          class="group p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
        >
          <div class="text-sm text-gray-500 mb-2">← Previous Article</div>
          <h4 class="font-semibold text-gray-900 group-hover:text-accent transition">{{ previousArticle.title }}</h4>
        </router-link>
        <div v-else></div>

        <router-link
          v-if="nextArticle"
          :to="{ name: 'BlogDetail', params: { slug: nextArticle.slug } }"
          class="group p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition text-right"
        >
          <div class="text-sm text-gray-500 mb-2">Next Article →</div>
          <h4 class="font-semibold text-gray-900 group-hover:text-accent transition">{{ nextArticle.title }}</h4>
        </router-link>
      </div>
    </article>

    <!-- Related Posts -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <RelatedPosts
          :related-articles="relatedPosts"
          @read="goToArticle"
        />
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <NewsletterCTA />
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="max-w-4xl mx-auto px-6 py-16 text-center">
    <h1 class="text-3xl font-serif text-gray-900 mb-4">Article Not Found</h1>
    <p class="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
    <router-link to="/blog" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
      Back to Blog
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSEO } from '@/composables/useSEO'
import { blogArticles } from '@/data/blogArticles'
import RelatedPosts from '@/components/RelatedPosts.vue'
import NewsletterCTA from '@/components/NewsletterCTA.vue'

const route = useRoute()
const router = useRouter()

// Find article by slug
const article = computed(() => {
  return blogArticles.find(a => a.slug === route.params.slug) || null
})

// Related posts (same category, different article)
const relatedPosts = computed(() => {
  if (!article.value) return []
  return blogArticles
    .filter(a => a.category === article.value.category && a.id !== article.value.id)
    .slice(0, 3)
})

// Previous and Next articles
const currentIndex = computed(() => blogArticles.findIndex(a => a.id === article.value?.id))
const previousArticle = computed(() => blogArticles[currentIndex.value - 1] || null)
const nextArticle = computed(() => blogArticles[currentIndex.value + 1] || null)

// SEO
onMounted(() => {
  if (article.value) {
    useSEO({
      title: article.value.title,
      description: article.value.description,
      url: `https://farmspice.com/blog/${article.value.slug}`,
      image: article.value.featuredImage,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.value.title,
        description: article.value.description,
        image: article.value.featuredImage,
        author: {
          '@type': 'Person',
          name: article.value.author
        },
        datePublished: article.value.publishDate
      }
    })

    window.scrollTo(0, 0)
  }
})

// Methods
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const goToArticle = (article) => {
  router.push({ name: 'BlogDetail', params: { slug: article.slug } })
}
</script>

<style scoped>
.prose {
  --tw-prose-body: #374151;
  --tw-prose-headings: #111827;
  --tw-prose-links: #C8A97E;
  --tw-prose-bold: #111827;
  --tw-prose-counters: #6B7280;
  --tw-prose-bullets: #D1D5DB;
  --tw-prose-hr: #E5E7EB;
  --tw-prose-quotes: #111827;
  --tw-prose-quote-borders: #C8A97E;
  --tw-prose-captions: #6B7280;
  --tw-prose-code: #111827;
  --tw-prose-pre-code: #E5E7EB;
  --tw-prose-pre-bg: #1F2937;
  --tw-prose-th-borders: #D1D5DB;
  --tw-prose-td-borders: #E5E7EB;
}
</style>
