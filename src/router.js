import { createRouter, createWebHistory } from 'vue-router'

import Conversor from './components/Conversor.vue'
import Welcome from './components/Welcome/index.vue'

const routes = [
    { path: '/', redirect: '/welcome' },
    { path: '/conversor', component: Conversor },
    { path: '/welcome', component: Welcome },
    { path: '/:pathmatch(.*)*', redirect: Conversor },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;