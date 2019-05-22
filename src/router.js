import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () =>
                import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
        },
        {
            path: '/terms',
            name: 'terms',
            component: () =>
                import(/* webpackChunkName: "terms" */ './views/Terms.vue')
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () =>
                import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
        },
        {
            path: '/editor',
            name: 'editor',
            component: () =>
                import(/* webpackChunkName: "editor" */ './views/CodeEditor.vue')
        },
        {
            path: '/demo',
            name: 'demo',
            component: () =>
                import(/* webpackChunkName: "demo" */ './components/DemoExample.vue')
        }
    ]
});
