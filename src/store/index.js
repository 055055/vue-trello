import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

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
    },
    actions: {
        ADD_BOARD(_, { title }) {
            return api.board.create(title)
        }
    }
})


export default store