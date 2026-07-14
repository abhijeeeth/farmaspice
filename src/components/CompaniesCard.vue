<template>
  <div
    class="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
  >
    <div class="overflow-hidden bg-gray-50">
      <img
        :src="logo"
        :alt="title"
        class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900">
        {{ title }}
      </h3>

      <p class="mt-3 text-sm leading-6 text-gray-600">
        {{ subtitle }}
      </p>

      <div class="mt-6 flex items-center justify-between">
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white font-medium transition hover:opacity-90"
        >
          Visit Website

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 7l-10 10M8 7h9v9"
            />
          </svg>
        </a>

        <span class="text-xs text-gray-400 uppercase tracking-wider">
          Portfolio
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  url: String,
  logo: {
    type: String,
    default: "/src/assets/logo.svg",
  },
});
</script>