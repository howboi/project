import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../Layouts/DefaultLayout.vue'
import homePage from '../views/homePage.vue';
import stockView from '../views/stockView.vue';
import stockAnalysis from '../views/stockAnalysis.vue';
import stockLink from '../views/stockLink.vue';
import smartAI from '../views/smartAI.vue';

const routes = [
    { path: '/', name: 'home', component: homePage }, //建立路徑home
    { path: '/view-stock', name: 'view', component: Layout },
    { path: '/stock-analysis', name: 'analysis', component: Layout },
    { path: '/stock-link', name: 'link', component: Layout },
    { path: '/smart-ai', name: 'AI', component: Layout },
];

const router = createRouter({ //建立路由器
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homePage,
        },
        {
            path: '/view-stock',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'view-stock',
                    component: stockView,
                },
            ],
        },
        {
            path: '/stock-analysis',
            component: Layout,    // 使用帶 Header + SideBar 的 layout
            children: [
                {
                    path: '',
                    name: 'stock-analysis',
                    component: stockAnalysis,
                },
            ],
        },
        {
            path: '/stock-link',
            component: Layout,  // 使用帶 Header + SideBar 的 layout
            children: [
                {
                    path: '',
                    name: 'stock-link',
                    component: stockLink,
                },
            ],
        },
        {
            path: '/smart-ai',
            component: Layout,    // 使用帶 Header + SideBar 的 layout
            children: [
                {
                    path: '',
                    name: 'smart-ai',
                    component: smartAI,
                },
            ],
        },
    ],
});

export default router;