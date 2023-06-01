import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Aplicacao from '../templates/padrao/index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: 'Home',
            },
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                title: 'About',
            },
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/app',
            name: 'aplicacao',
            component: Aplicacao,
            children: [
                {
                    path: '/app/dashboard',
                    name: 'dashboard',
                    meta: {
                        title: 'Dashboard',
                    },
                    component: () => import('@/views/dashboard/Dashboard.vue'),
                },
                //   {
                //     path: '',
                //     name: '',
                //     component: ,
                //   },
            ],
        },
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;

    //     const publicPages = ['/login', '/register'];
    //     const authRequired = !publicPages.includes(to.path);
    //     const loggedIn = localStorage.getItem('user');

    //     if (authRequired && !loggedIn) {
    //     return next('/login');
    //   }
    next();
});

export default router;
