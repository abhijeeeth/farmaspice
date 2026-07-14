import { onMounted } from 'vue'

export function useSEO({ title, description, url, image, jsonLd } = {}) {
    onMounted(() => {
        if (title) document.title = title + ' | FarmSpice'
        const metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc && description) metaDesc.setAttribute('content', description)
        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]')
        if (ogTitle && title) ogTitle.setAttribute('content', title)
        const ogDesc = document.querySelector('meta[property="og:description"]')
        if (ogDesc && description) ogDesc.setAttribute('content', description)

        if (jsonLd) {
            let el = document.getElementById('json-ld')
            if (!el) {
                el = document.createElement('script')
                el.type = 'application/ld+json'
                el.id = 'json-ld'
                document.head.appendChild(el)
            }
            el.textContent = JSON.stringify(jsonLd)
        }
    })
}
