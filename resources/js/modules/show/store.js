import api from '../../api'

export default {
    namespaced: true,
    state: {
        id_show: null,
        show: [],
        loading: false
    },
    mutations: {
        setShowId: (state, payload) => { state.id_show = payload },
        setShow: (state, payload) => { state.show = payload },
        setLoading: (state, payload) => { state.loading = payload },
        cleanData: (state) => {
            state.show = []
            state.id_show = null
        }
    },
    getters: {
        getShowId: state => { return state.id_show },
        getShow: state => { return state.show },
        getLoading: state => { return state.loading }
    },
    actions: {
        getShow: ({ commit, getters }) => {
            commit('setLoading', true)
            api.get('/show', {
                params: {
                    id_show: getters.getShowId
                }
            }).then(response => {
                commit('setShow', response.data)
                commit('setLoading', false)
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
            })
        }
    }
}