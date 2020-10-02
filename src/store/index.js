import Vue from 'vue'
import Vuex from 'vuex'
import { compileToFunctions } from 'vue-template-compiler';

Vue.use(Vuex)
    //보드추가 상태값 저장소
const store = new Vuex.Store({
    state: {
        isAddBoard: false
    },
    mutations: {
        SET_IS_ADD_BOARD(state, toggle) {
            state.isAddBoard = toggle
        }
    }
})


export default store