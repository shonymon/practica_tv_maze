<template>
    <section class="mb-6 mt-6">

        <div class="mb-2">
            <button class="button is-light"
                @click="goBack">
                <i class="mr-1 fas fa-arrow-circle-left"></i> Regresar
            </button>
        </div>
    
        <loading :active="getLoading" />

        <h2 class="title is-3 mb-6 mt-6">Mis Shows Favoritos</h2>
        
        <div class="columns is-multiline">
            <div class="column is-one-quarter" 
                v-for="f in getFavorites" 
                :key="f.id">
                <videocard :show="f" :favorite="true" />
            </div>
        </div>

    </section>
</template>

<script>
import loading from '../../components/loading'
import videocard from '../../components/videocard'
import { mapGetters } from 'vuex'

export default {
    mounted() {
        this.$store.dispatch('favorites/getFavorites')
    },
    components: { loading, videocard },
    computed: {
        ...mapGetters('favorites', [
            'getFavorites',
            'getLoading'
        ])
    },
    methods: {
        goBack() { this.$router.go(-1) }
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('favorites/cleanData')
        next()
    }
}
</script>