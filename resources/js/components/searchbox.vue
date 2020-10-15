<template>
    <div class="hero background is-relative mt-4 mb-4">
        <div class="hero-body">
            <div class="container has-text-centered">

                <div class="column is-6 is-offset-3">
                    <h2 class="title is-3">Buscar Show</h2>
                    <div class="box">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <binput label=""
                                    :hasiconleft="true"
                                    icon="fas fa-search"
                                    type="text"
                                    placeholder="Buscar show..."
                                    @keyup.enter="goSearch"
                                    v-model="search_box" />
                            </p>
                            <p class="control" style="padding-top: 7px;">
                                <button
                                    class="button is-info"
                                    icon-left="fas fa-search"
                                    @click="goSearch">
                                    Buscar
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import binput from './binput'

export default {
    components: { binput },
    computed: {
        search_box: {
            get () { return this.$store.getters['home/getSearchBox'] },
            set (value) { this.$store.commit('home/setSearchBox', value) }
        }
    },
    methods: {
        goSearch() {
            this.$store.dispatch('home/getShows')
        }
    }
}
</script>

<style scoped>
.background {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.11' fill-rule='evenodd'%3E%3Cpath d='M0 0h35v35H0V0zm5 5h25v25H5V5zm5 5h15v15H10V10zm5 5h5v5h-5v-5zM40 5h25v25H40V5zm5 5h15v15H45V10zm5 5h5v5h-5v-5zM70 35H35v35h35V35zm-5 5H40v25h25V40zm-5 5H45v15h15V45zm-5 5h-5v5h5v-5zM30 40H5v25h25V40zm-5 5H10v15h15V45zm-5 5h-5v5h5v-5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>