import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'



Vue.use(VueRouter);

const router = new VueRouter({
    hashbang: false,
    history: true,
    routes: Routes,
    mode: 'history',
});


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
