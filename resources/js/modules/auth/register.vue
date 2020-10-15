<template>
    <section class="hero is-medium is-bold">
        <div class="hero-body">
            <div class="container">

                <h1 class="title has-text-centered">Crea una cuenta</h1>

                <loading :active="getLoading" />

                <div class="column is-4 is-offset-4">

                    <notification :errors="getErrors" :message="errorMessage" />

                    <div class="box">
                        
                        <binput label="Nombre"
                            :hasiconleft="true"
                            icon="fas fa-user"
                            type="text"
                            placeholder="Arturo Cruz"
                            :errors="getErrors"
                            errorname="name"
                            v-model="name" />

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

                        <binput label="Repetir Contraseña"
                            :hasiconleft="true"
                            icon="fas fa-lock"
                            type="password"
                            :errors="getErrors"
                            errorname="password_confirmation"
                            v-model="password_confirmation" />
                       

                        <div class="field mt-5 is-clearfix">
                            <div class="control">
                                <button class="button is-link is-pulled-right"
                                    @click="register">
                                    Registrarse
                                </button>
                            </div>
                        </div>

                    </div>

                    <p class="has-text-centered">
                        Ya tienes cuenta? 
                        <router-link :to="{ name: 'Login' }">Inicia Sesión</router-link >
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
import { mapGetters } from 'vuex'

export default {
    components: { loading, notification, binput },
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
            get () { return this.$store.getters['auth/getEmail'] },
            set (value) { this.$store.commit('auth/setEmail', value) }
        },
        name: {
            get () { return this.$store.getters['auth/getName'] },
            set (value) { this.$store.commit('auth/setName', value) }
        },
        password: {
            get () { return this.$store.getters['auth/getPassword'] },
            set (value) { this.$store.commit('auth/setPassword', value) }
        },
        password_confirmation: {
            get () { return this.$store.getters['auth/getPasswordConfirmation'] },
            set (value) { this.$store.commit('auth/setPasswordConfirmation', value) }
        }
    },
    methods: {
        register() {
            this.$store.dispatch('auth/register').then(() => {
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