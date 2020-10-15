<template>
    <section class="mt-6 mb-6">

        <searchbox />

        <loading :active="getLoading" />
        
        <div class="columns is-multiline">
            <div class="column is-one-quarter" 
                v-for="s in getShows" 
                :key="s.show.id">
                <videocard :show="s.show" />
            </div>
        </div>

    </section>
</template>

<script>
import loading from '../../components/loading'
import videocard from '../../components/videocard'
import searchbox from '../../components/searchbox'
import { mapGetters } from 'vuex'

export default {
    mounted() {
        this.$store.dispatch('home/getShows')
    },
    components: { videocard, searchbox, loading },
    computed: {
        ...mapGetters('home', [
            'getShows',
            'getLoading'
        ])
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('home/cleanData')
        next()
    }
}
</script>