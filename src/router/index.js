import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'




Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history', //url # 제거. history mode 사용
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '*', component: NotFound } //마지막은 다 여기로. if else와 같이
    ]
})


export default router