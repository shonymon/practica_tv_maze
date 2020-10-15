import api from '../../api'

export default {
    namespaced: true,
    state: {
        shows: [],
        loading: false,
        search_box: 'hero'
    },
    mutations: {
        setShows: (state, payload) => { state.shows = payload },
        setLoading: (state, payload) => { state.loading = payload },
        setSearchBox: (state, payload) => { state.search_box = payload },
        cleanData: (state) => { state.shows = [] }
    },
    getters: {
        getShows: state => { return state.shows },
        getLoading: state => { return state.loading },
        getSearchBox: state => { return state.search_box }
    },
    actions: {
        getShows: ({ commit, getters }) => {
            commit('setLoading', true)
            api.get('/shows', {
                params: {
                    q: getters.getSearchBox
                }
            }).then(response => {
                commit('setShows', response.data)
                commit('setLoading', false)
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
            })
        },
        saveFavorite: ({ commit }, data) => {
            commit('setLoading', true)
            return api.post('/favorite', data).then(response => {
                commit('setLoading', false)
                return response.data
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
                throw error
            })
        }
    }
}