import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import BlogArchive from './components/BlogArchive.vue'
import App from './App.vue'

Vue.use(VueRouter)

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
