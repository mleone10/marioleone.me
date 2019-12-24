import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import BlogArchive from './components/BlogArchive.vue'
import App from './App.vue'

Vue.use(VueRouter)
Vue.prototype.axios = axios

const router = new VueRouter({
        routes: [
                {path: '/', component: Home},
                {path: '/archive', component: BlogArchive},
        ]
})

new Vue({
        router,
        ...App
}).$mount('#app')
