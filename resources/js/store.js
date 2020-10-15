import Vue from 'vue'
import Vuex from 'vuex'

// Modulos
import auth from './modules/auth/store'
import home from './modules/home/store'
import favorites from './modules/favorites/store'
import show from './modules/show/store'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        home,
        favorites,
        show
    }
})

export default store