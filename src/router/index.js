import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from './modules/dashboard'
import bankSoalRoutes from './modules/bankSoal'
import loginRoutes from './modules/login'
import ujianRoutes from './modules/ujian'
import pesertaUjianRoutes from './modules/pesertaUjian'
import jadwalUjianRoutes from './modules/jadwalUjian'
import nilaiRoutes from './modules/nilai'

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    ...loginRoutes,
    ...dashboardRoutes,
    ...bankSoalRoutes,
    ...ujianRoutes,
    ...pesertaUjianRoutes,
    ...jadwalUjianRoutes,
    ...nilaiRoutes,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router