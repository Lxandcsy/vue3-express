import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router