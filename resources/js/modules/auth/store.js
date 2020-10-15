import api from '../../api'

const registerData = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
}

const loginData = {
    email: '',
    password: '',
    remember: false
}

export default {
    namespaced: true,
    state: {
        register: registerData,
        login: loginData,
        loading: false,
        errors: [],
        isAuth: false,
        user: null,
        token: localStorage.getItem('access_token') || null,
    },
    mutations: {
        setErrors: (state, payload) => { state.errors = payload },
        setLoading: (state, payload) => { state.loading = payload },
        cleanData: (state) => {
            state.register = registerData
            state.login = loginData
            state.errors = []
        },
        setIsAuth: (state, payload) => { 
            state.isAuth = payload.isAuth
            state.user = payload.user
        },

        // Set Register Data
        setName: (state, payload) => { state.register.name = payload },
        setEmail: (state, payload) => { state.register.email = payload },
        setPassword: (state, payload) => { state.register.password = payload },
        setPasswordConfirmation: (state, payload) => { state.register.password_confirmation = payload },

        // Set Login Data
        setLoginEmail: (state, payload) => { state.login.email = payload },
        setLoginPassword: (state, payload) => { state.login.password = payload },
        setLoginRemember: (state, payload) => { state.login.remember = payload },
        
        // Token
        setToken: (state, payload) => {
            localStorage.setItem('access_token', payload)
            state.token = payload
        },
        destroyToken: (state) => {
            localStorage.removeItem('access_token')
            state.token = null
        }
    },
    getters: {
        hasErrors: state => {
            if (state.errors.length == 0) { return false }
            else { return true }
        },
        getErrors: state => { return state.errors },
        getLoading: state => { return state.loading },
        getIsAuth: state => { return state.isAuth },
        getUserData: state => { return state.user },

        // Get Register Data
        getRegister: state => { return state.register },
        getName: state => { return state.register.name },
        getEmail: state => { return state.register.email },
        getPassword: state => { return state.register.password },
        getPasswordConfirmation: state => { return state.register.password_confirmation },
        
        // Get Login Data
        getLogin: state => { return state.login },
        getLoginEmail: state => { return state.login.email },
        getLoginPassword: state => { return state.login.password },
        getLoginRemember: state => { return state.login.remember },

        // Token
        getToken: state => { return state.token }
    },
    actions: {
        checkIsAuth: ({ commit }) => {
            commit('setLoading', true)
            return api.get('/user').then(response => {
                commit('setIsAuth', { isAuth: true, user: response.data })
                commit('setLoading', false)
                return response.data
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
                throw error
            })
        },
        register: ({ commit, getters }) => {
            commit('setLoading', true)
            commit('setErrors', [])
            return api.post('/register', getters.getRegister).then(response => {
                commit('setLoading', false)
                commit('setIsAuth', { isAuth: true, user: response.data.user })
                commit('setToken', response.data.token)
                return response.data
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
                commit('setErrors', error.response.data.errors)
                throw error
            })
        },
        login: ({ commit, getters }) => {
            commit('setLoading', true)
            commit('setErrors', [])
            return api.post('/login', getters.getLogin).then(response => {
                commit('setLoading', false)
                commit('setIsAuth', { isAuth: true, user: response.data.user })
                commit('setToken', response.data.token)
                return response.data
            }).catch(error => {
                console.log(error)
                commit('setLoading', false)
                commit('setErrors', error.response.data.errors)
                throw error
            })
        },
        logout: ({ commit }) => {
            return api.post('/logout').then(response => {
                commit('setIsAuth', { isAuth: false, user: null })
                commit('destroyToken')
                return response.data
            }).catch(error => {
                console.log(error)
                throw error
            })
        }
    }
}