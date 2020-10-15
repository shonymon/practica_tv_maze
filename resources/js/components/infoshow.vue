<template>
    <div class="box">

        <div class="hero is-relative" v-if="getLoading">
            <div class="hero-body">
                <loading :active="getLoading" />
            </div>
        </div>

        <div v-if="!getLoading">
            <h1 class="title is-2">{{getShow.name}}</h1>
            <h2 class="subtitle is-4">{{getShow.status}}</h2>

            <infotag name="Idioma" :value="getShow.language" />
            <infotag name="Estado" :value="getShow.status" />
            <infotag name="Tiempo" :value="getShow.runtime" />
            <infotag name="Desde" :value="dateToStringShort(getShow.premiered)" />
            <infotag name="Tipo" :value="getShow.type" />
            <infotag name="Sitio Oficial" :value="getShow.officialSite" />
            <infotag v-if="getShow.country" name="Páis" :value="getShow.country.name" />

            <p class="mb-4" v-html="getShow.summary"></p>

            <div class="control mb-5">
                <div class="tags">
                    <span class="tag is-light" 
                        v-for="(genre, i) in getShow.genres" 
                        :key="i">
                        {{genre}}
                    </span>
                </div>
            </div>

            <button
                class="button is-info"
                @click="saveShowToFavorites">
                Agregar a Favoritos
            </button>

        </div>
        
    </div>
</template>

<script>
import loading from './loading'
import infotag from './infotag'
import tools from '../tools'
import { toast } from 'bulma-toast'
import { mapGetters } from 'vuex'

export default {
    components: { loading, infotag },
    computed: {
        ...mapGetters('show', [
            'getShow',
            'getLoading'
        ])
    },
    methods: {
        saveShowToFavorites() {
            this.$store.dispatch('home/saveFavorite', {
                name: getShow.name,
                status: getShow.status,
                runtime: getShow.runtime,
                language: getShow.language,
                image: this.hasImage(getShow.image),
                id_show: getShow.id
            }).then(() => {
                this.successMsg('Show Añadido a Favoritos!')
            }).catch(error => {
                this.handleErrors(error)
            })
        },
        hasImage(image) {
            if (image) { return image.medium }
            else { return null }
        },
        successMsg(msg) {
            toast({
                duration: 2000,
                position: "top-center",
                message: msg,
                type: "is-success"
            })
        },
        errorMsg(msg) {
             toast({
                duration: 2000,
                position: "top-center",
                message: msg,
                type: "is-danger"
            })
        },
        handleErrors(error) {
            if (error.response.data.message) { this.errorMsg(error.response.data.message) }
            else { this.errorMsg('Error en el sistema...') }
        },
        dateToStringShort: tools.dateToStringShort
    }
}
</script>