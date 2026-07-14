import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Manufacturing = () => import('../views/Manufacturing.vue')
const Companies = () => import('../views/Companies.vue')
const Products = () => import('../views/Products.vue')
const Quality = () => import('../views/Quality.vue')
const Sustainability = () => import('../views/Sustainability.vue')
const Industries = () => import('../views/Industries.vue')
const Blog = () => import('../views/Blog.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/manufacturing', name: 'Manufacturing', component: Manufacturing },
    { path: '/companies', name: 'Companies', component: Companies },
    { path: '/products', name: 'Products', component: Products },
    { path: '/quality', name: 'Quality', component: Quality },
    { path: '/sustainability', name: 'Sustainability', component: Sustainability },
    { path: '/industries', name: 'Industries', component: Industries },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        return { left: 0, top: 0 }
    }
})

export default router
