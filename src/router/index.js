import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'



Vue.use(VueRouter) //이거 때문에 $route로 라우터 접근 가능. 


const router = new VueRouter({
    mode: 'history', //url # 제거. history mode 사용
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/b/:bid', component: Board }, //: bid라는 변수로 받을 수 있다.
        { path: '*', component: NotFound } //마지막은 다 여기로. if else와 같이
    ]
})


export default router