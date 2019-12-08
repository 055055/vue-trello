import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }


const router = new VueRouter({
    mode: 'history', //url # 제거. 
    routes: [
        { path: '/', component: App },
        { path: '/login', component: Login },
        { path: '*', component: NotFound } //마지막은 다 여기로. if else와 같이
    ]
})


new Vue({
    el: '#app',
    router,
    render: h => h({ template: '<router-view></router-view>' })
})