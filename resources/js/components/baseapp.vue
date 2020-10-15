<template>
    <section>
        <navigation />
        <div class="container">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import navigation from './navigation'
import { mapGetters } from 'vuex'

export default {
    mounted() {
        this.checkAuth()
    },
    components: { navigation },
    data() {
       return {
            loginUrl: this.$publicUrl + '#/login'
       }
    },
    computed: {
        ...mapGetters('auth', [
            'getToken'
        ])
    },
    methods: {
        checkAuth() {
            if (this.getToken != null) {
                this.$store.dispatch('auth/checkIsAuth').then(() => {
                    console.log('Server Auth Ok!')
                }).catch(() => {
                    this.$store.commit('auth/destroyToken')
                    window.location.href = this.loginUrl
                })
            }
        }
    }
}
</script>