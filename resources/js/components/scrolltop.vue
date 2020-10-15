<template>
    <div class="bottom-right" v-show="visible">
        <button class="button is-medium" @click="scrollTop">
            <i class="fas fa-chevron-circle-up"></i>
        </button>
    </div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollListener)
    },
    data () {
        return {
            visible: false
        }
    },
    methods: {
        scrollTop() {
            this.intervalId = setInterval(() => {
                if (window.pageYOffset === 0) {
                    clearInterval(this.intervalId)
                }
                window.scroll(0, window.pageYOffset - 50)
            }, 20)
        },
        scrollListener(e) {
            this.visible = window.scrollY > 150
        }
    }
}
</script>

<style scoped>
.bottom-right {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>
