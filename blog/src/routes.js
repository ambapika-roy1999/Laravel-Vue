import { createWebHistory, createRouter } from 'vue-router'
import HOME from './components/home.vue';
import Asd from './components/asd.vue';
import ABOUT from './components/about.vue';
const routes = [
    {
        name:'home',
        path: '/home',
        component: HOME
    },
    {
        name:'asd',
        path: '/asd/:name',
        component: Asd
    },
    {
        name:'ABOUT',
        path: '/about',
        component: ABOUT
    }
];
const router = createRouter ({
    history:createWebHistory(),
    routes
});
export default router;