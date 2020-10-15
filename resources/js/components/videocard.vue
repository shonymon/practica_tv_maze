<template>
    <div class="card has-shadow m-2">
        <div class="card-image">
            <figure class="image is-4by5" v-if="show.image">
                <img :src="checkIfFavorite(show)" :alt="show.name">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-5">{{show.name}}</p>
                    <p class="subtitle is-6">{{show.status}}</p>
                </div>
            </div>
            <div class="content">
                <div>Runtime: {{show.runtime}}</div>
                <div>Language: {{show.language}}</div>
                <div v-if="!favorite">
                    <span class="tag is-light"
                        v-for="(genre, i) in show.genres" 
                        :key="i">
                        {{genre}}
                    </span>
                </div>
                <br>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item pointer" @click="goShowDetails(show.id)">
                <i class="mr-1 fas fa-eye"></i>Ver
            </a>
            <a class="card-footer-item pointer" 
                v-if="!favorite"
                @click="saveShowToFavorites(show)">
                <i class="mr-1 fas fa-star"></i>Favoritos
            </a>
            <a class="card-footer-item pointer"
                v-else
                @click="deleteFavorite(show.id)">
                <i class="mr-1 fas fa-trash-alt"></i>Borrar
            </a>
        </footer>
    </div>
</template>

<script>
import { toast } from 'bulma-toast'

export default {
    props: {
        show: {
            type: [Array, Object],
            required: true
        },
        favorite: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        goShowDetails(id_show) {
            this.$router.push({ name: 'Show', params: { id: id_show }})
        },
        saveShowToFavorites(show) {
            this.$store.dispatch('home/saveFavorite', {
                name: show.name,
                status: show.status,
                runtime: show.runtime,
                language: show.language,
                image: this.hasImage(show.image),
                id_show: show.id
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
        deleteFavorite(id_favorite) {
            this.$store.dispatch('favorites/deleteFavorite', id_favorite).then(() => {
                this.successMsg('Show Borrado de Favoritos!')
            }).catch(error => {
                this.handleErrors(error)
            })
        },
        checkIfFavorite(show) {
            if (!this.favorite) { return show.image.medium }
            else { return show.image }
        }
    }
}
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>