import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './views/AboutPage'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('./views/HomePage'),
    },
    {
        path: '/SingSongRap/TheStar',
        name: 'TheStar',
        component: () => import('./views/SingSongRap/TheStar'),
    },
    {
        path: '/GoodEat/MyHomeFood',
        name: 'MyHomeFood',
        component: () => import('./views/GoodEat/MyHomeFood'),
    },
    {
        path: '/MakeMoney/DoWhere',
        name: 'DoWhere',
        component: () => import('./views/MakeMoney/DoWhere'),
    },
    {
        path: '/GoOut/HappyOutside',
        name: 'HappyOutside',
        component: () => import('./views/GoOut/HappyOutside'),
    },
    {
        path: '/PlayGame/NowGame',
        name: 'NowGame',
        component: () => import('./views/PlayGame/NowGame'),
    },
    {
        path: '/Setting/SettingThis',
        name: 'SettingThis',
        component: () => import('./views/Setting/SettingThis'),
    },
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router