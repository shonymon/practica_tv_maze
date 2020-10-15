<template>
    <div class="loader-wrapper" :class="checkActive">
        <div class="loader is-loading"></div>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        checkActive() {
            if (this.active) { return 'is-active' }
            else { return '' }
        }
    }
}
</script>

<style>
.loader-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #ffffff9e;
    opacity: 0;
    z-index: -1;
    transition: opacity .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
}

.loader-wrapper.is-active {
    opacity: 1;
    z-index: 999999;
}

.loader-wrapper .loader {
    height: 80px;
    width: 80px;
}
</style>