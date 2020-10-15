<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu container">
            <div class="navbar-start">
                <router-link class="navbar-item" :to="{ name: 'Home' }">
                    Incio
                </router-link>

                <a class="navbar-item" href="http://www.tvmaze.com/shows" target="_blank">
                    Página Oficial
                </a>

                <a class="navbar-item" href="http://www.tvmaze.com/api" target="_blank">
                    Documentación API
                </a>

                <router-link class="navbar-item" :to="{ name: 'Favoritos' }">
                    Favoritos
                </router-link>
            </div>

            <div class="navbar-end" v-if="getIsAuth">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary outlined"
                            @click="logout">
                            Cerrar Sesión
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
       return {
            loginUrl: this.$publicUrl + '#/login'
       }
    },
    computed: {
        ...mapGetters('auth', [
            'getIsAuth'
        ])
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout').then(() => {
                window.location.href = this.loginUrl
            }).catch(() => {})
        }
    }
}
</script>