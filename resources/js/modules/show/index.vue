<template>
    <section class="mb-6 mt-6">

        <div class="mb-2">
            <button class="button is-light"
                @click="goBack">
                <i class="mr-1 fas fa-arrow-circle-left"></i> Regresar
            </button>
        </div>
    
        <div class="columns">
            <div class="column is-4">
                <imageshow />
            </div>
            <div class="column is-8">
                <infoshow />
            </div>
        </div>

    </section>
</template>

<script>
import infoshow from '../../components/infoshow'
import imageshow from '../../components/imageshow'

export default {
    mounted() {
        this.$store.commit('show/setShowId', this.$route.params.id)
        this.$store.dispatch('show/getShow')
    },
    components: { infoshow, imageshow },
    methods: {
        goBack() { this.$router.go(-1) }
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('show/cleanData')
        next()
    }
}
</script>