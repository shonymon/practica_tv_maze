<template>
    <section class="hero is-medium is-bold">
        <div class="hero-body">
            <div class="container">

                <h1 class="title has-text-centered">Inicia sesión en tu cuenta</h1>

                <loading :active="getLoading" />

                <div class="column is-4 is-offset-4">

                    <notification :errors="getErrors" :message="errorMessage" />

                    <div class="box">
                        
                        <binput label="Email"
                            :hasiconleft="true"
                            icon="fas fa-envelope"
                            type="text"
                            placeholder="correo@correo.com"
                            :errors="getErrors"
                            errorname="email"
                            v-model="email" />

                         <binput label="Contraseña"
                            :hasiconleft="true"
                            icon="fas fa-lock"
                            type="password"
                            :errors="getErrors"
                            errorname="password"
                            v-model="password" />
                      
                        <bcheckbox label="Mantener la sesión" v-model="remember" />

                        <div class="field mt-5 is-clearfix">
                            <div class="control">
                                <button class="button is-link is-pulled-right"
                                    @click="login">
                                    Iniciar Sesión
                                </button>
                            </div>
                        </div>

                    </div>

                    <p class="has-text-centered">
                        No tienes cuenta? 
                        <router-link :to="{ name: 'Register' }">Registrate</router-link >
                    </p>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import loading from '../../components/loading'
import notification from '../../components/notification'
import binput from '../../components/binput'
import bcheckbox from '../../components/bcheckbox'
import { mapGetters } from 'vuex'

export default {
    components: { loading, notification, binput, bcheckbox },
    data() {
        return {
            errorMessage: 'Error, algunos valores no son válidos...'
        }
    },
    computed: {
        ...mapGetters('auth', [
            'getLoading',
            'getErrors'
        ]),
        email: {
            get () { return this.$store.getters['auth/getLoginEmail'] },
            set (value) { this.$store.commit('auth/setLoginEmail', value) }
        },
        password: {
            get () { return this.$store.getters['auth/getLoginPassword'] },
            set (value) { this.$store.commit('auth/setLoginPassword', value) }
        },
        remember: {
            get () { return this.$store.getters['auth/getLoginRemember'] },
            set (value) { this.$store.commit('auth/setLoginRemember', value) }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('auth/login').then(() => {
                this.$router.push({ name: 'Home' })
            }).catch(() => {})
        }
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('auth/cleanData')
        next()
    }
}
</script>