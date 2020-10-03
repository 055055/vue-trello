import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex)
    //보드추가 상태값 저장소
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    //action은 api 호출같은 비동기 호출을 담당 mutation은 동기
    actions
})

const { token } = localStorage
store.commit('LOGIN', token)



export default store