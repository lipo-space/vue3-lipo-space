import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage'
import AboutPage from './views/AboutPage'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    // scrollBehavior() {
    //     return window.scrollTo({ top: 0, behavior: 'smooth' });
    // },
    history: createWebHistory(),
    routes
})

export default router