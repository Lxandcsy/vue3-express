import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router