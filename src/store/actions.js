import * as api from '../api'

const actions = {
    ADD_BOARD(_, { title }) {
        return api.board.create(title).then(data => data.item)
    },
    FETCH_BOARDS({ commit }) {
        return api.board.fetch().then(data => {
            commit('SET_BOARDS', data.list)
        })
    },
    FETCH_BOARD({ commit }, { id }) {
        return api.board.fetch(id).then(data => {
            commit('SET_BOARD', data.item)
        })
    },
    DELETE_BOARD(_, { id }) {
        return api.board.destory(id)
    },
    LOGIN({ commit }, { email, password }) {
        return api.auth.login(email, password)
            .then(({ accessToken }) => commit('LOGIN', accessToken))
    },
    ADD_CARD({ dispatch, state }, { title, listId, pos }) {
        return api.card.create({ title, listId, pos })
            .then(() => dispatch('FETCH_BOARD', { id: state.board.id }))
    },
    //commit은 ctx안에 있음
    FETCH_CARD({ commit }, { id }) {
        return api.card.fetch(id).then(data => {
            commit('SET_CARD', data.item)
        })
    },
    //dispatch도 ctx(context)안에 있음 context란 하나의 트랜잭션인듯 jpa와 같이 내생각임 
    UPDATE_CARD({ dispatch, state }, { id, title, description, pos, listId }) {
        return api.card.update(id, { title, description, pos, listId })
            .then(_ => dispatch('FETCH_BOARD', { id: state.board.id }))
    },
    DELETE_CARD({ dispatch, state }, { id }) {
        return api.card.destory(id)
            .then(_ => dispatch('FETCH_BOARD', { id: state.board.id }))
    }
}

export default actions