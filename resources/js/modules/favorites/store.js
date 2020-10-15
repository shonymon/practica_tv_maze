import api from '../../api'
import { findIndex } from 'lodash'

export default {
    namespaced: true,
    state: {
        favorites: [],
        loading: false
    },
    mutations: {
        setFavorites: (state, payload) => { state.favorites = payload },
        setLoading: (state, payload) => { state.loading = payload },
        removeFavorite: (state, payload) => {
            const index = findIndex(state.favorites, o => { return o.id == payload.id })
            state.favorites.splice(index, 1)
        },
        cleanData: (state) => { state.favorites = [] }
    },
    getters: {
        getFavorites: state => { return state.favorites },
        getLoading: state => { return state.loading }
    },
    actions: {
        getFavorites: ({ commit, getters }) => {
            commit('setLoading', true)
            api.get('/favorites').then(response => {
                commit('setFavorites', response.data)
                commit('setLoading', false)
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
            })
        },
        deleteFavorite: ({ commit }, id_favorite) => {
            commit('setLoading', true)
            return api.delete('/favorite/' + id_favorite).then(response => {
                commit('setLoading', false)
                commit('removeFavorite', response.data)
                return response.data
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
                throw error
            })
        }
    }
}