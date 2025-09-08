import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../Layouts/DefaultLayout.vue'
import homePage from '../views/homePage.vue';
import stockView from '../views/stockView.vue';
import stockAnalysis from '../views/stockAnalysis.vue';
import stockLink from '../views/stockLink.vue';
import smartAI from '../views/smartAI.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: homePage
    },
    {
        path: '/view-stock',
        component: Layout,
        children: [
            {
                path: '',
                name: 'view',
                component: stockView
            }
        ]
    },
    {
        path: '/stock-analysis',
        component: Layout,
        children: [
            {
                path: '',
                name: 'analysis',
                component: stockAnalysis
            }
        ]
    },
    {
        path: '/stock-link',
        component: Layout,
        children: [
            {
                path: '',
                name: 'link',
                component: stockLink
            }
        ]
    },
    {
        path: '/smart-ai',
        component: Layout,
        children: [
            {
                path: '',
                name: 'AI',
                component: smartAI
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;