import Vue from 'vue'
import VueRouter from 'vue-router'
import config from './config'
import authStore from './modules/auth/store'

// Modules Routes
let routes = []
import auth from './modules/auth/routes'
import home from './modules/home/routes'
import favorites from './modules/favorites/routes'
import show from './modules/show/routes'

// Join Routes
routes = routes.concat(home, auth, favorites, show)
Vue.use(VueRouter)

const router = new VueRouter({
    //mode: 'history', //removes # (hashtag) from url
    base: config.appUrl,
    fallback: true, //router should fallback to hash (#) mode when the browser does not support history.pushState
    routes,
    scrollBehavior() {
        return { x:0, y:0 }
    }
});

// Check Auth Routes
router.beforeEach((to, from, next) => {
    if (authStore.state.token != null) {
        if (to.meta.checkAuth) { next() }
        if (to.meta.isGuest) { next({ name: 'Home' }) }
    }
    else {
        if (to.meta.isGuest) { next() }
        else { next({ name: 'Login' }) }
    }
})

export default router