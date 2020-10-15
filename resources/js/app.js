import Vue from 'vue'
import router from './router'
import store from './store'
import config from './config'

// Set Global Vars
Vue.prototype.$publicUrl = config.publicUrl
Vue.prototype.$appUrl = config.appUrl
Vue.prototype.$appName = config.appName

// Vue Config
Vue.config.productionTip = false

// Initial Components
import baseapp from './components/baseapp'
import scrolltop from './components/scrolltop'

new Vue({
	el: '#app',
	router,
    store,
    components: { baseapp, scrolltop }
})
