<template>
    <div class="box">

        <div class="hero is-relative" v-if="getLoading">
            <div class="hero-body">
                <loading :active="getLoading" />
            </div>
        </div>

        <figure class="image is-4by5" v-if="getShow.image">
            <img v-if="getShow.image.original" 
                :src="getShow.image.original" 
                :alt="getShow.name">
        </figure>

    </div>
</template>

<script>
import loading from './loading'
import { mapGetters } from 'vuex'

export default {
    components: { loading },
    computed: {
        ...mapGetters('show', [
            'getShow',
            'getLoading'
        ])
    },
}
</script>