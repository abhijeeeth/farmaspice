<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-serif text-gray-900">Frequently Asked Questions</h1>
        <p class="mt-4 text-lg text-gray-700 max-w-2xl">
          Find answers to common questions about our products, services, ordering, and business practices. Can't find what you're looking for? <router-link to="/contact" class="text-accent font-semibold hover:text-primary">Contact us</router-link>.
        </p>
      </div>
    </section>

    <!-- Search Section -->
    <section class="max-w-6xl mx-auto px-6 py-12">
      <FAQSearch
        v-model="searchQuery"
        :results="searchResults"
        @select="scrollToQuestion"
      />
    </section>

    <!-- Filters Section -->
    <section class="max-w-6xl mx-auto px-6 py-8 border-b border-gray-200">
      <h3 class="text-sm font-semibold text-gray-600 mb-4 uppercase">Browse by Category</h3>
      <FAQCategoryFilter
        :categories="faqCategories"
        :selected-category="selectedCategory"
        @select="selectedCategory = $event"
      />
    </section>

    <!-- FAQs Section -->
    <section class="max-w-4xl mx-auto px-6 py-16">
      <div v-if="filteredFAQs.length > 0">
        <h2 class="text-2xl font-serif text-gray-900 mb-8">{{ selectedCategory || 'All FAQs' }}</h2>
        <FAQAccordion :items="filteredFAQs" />
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg">No FAQs found matching your search.</p>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <NewsletterCTA />
    </section>

    <!-- Additional Help Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-2xl md:text-3xl font-serif text-gray-900 mb-4">Still have questions?</h2>
        <p class="text-gray-700 mb-8">
          Our team is here to help. Reach out to us directly for personalized assistance.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/contact"
            class="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition font-medium"
          >
            Contact Us
          </router-link>
          <a
            href="mailto:info@farmspice.com"
            class="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-medium"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO'
import { faqs, faqCategories } from '@/data/faqs'
import FAQSearch from '@/components/FAQSearch.vue'
import FAQCategoryFilter from '@/components/FAQCategoryFilter.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import NewsletterCTA from '@/components/NewsletterCTA.vue'

// SEO
useSEO({
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about FarmSpice products, services, ordering, and business practices.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
})

// State
const searchQuery = ref('')
const selectedCategory = ref(null)

// Computed
const searchResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase()
  return faqs.filter(faq =>
    faq.question.toLowerCase().includes(query) ||
    faq.answer.toLowerCase().includes(query)
  )
})

const filteredFAQs = computed(() => {
  let result = faqs

  if (selectedCategory.value) {
    result = result.filter(faq => faq.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    )
  }

  return result
})

// Methods
const scrollToQuestion = (faq) => {
  selectedCategory.value = faq.category
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
