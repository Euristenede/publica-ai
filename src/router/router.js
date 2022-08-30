import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/pages/main/HomePage'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;