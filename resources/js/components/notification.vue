<template>
    <div class="notification is-danger" v-if="hasErrors">
        <button class="delete"></button>
        {{message}}
    </div>
</template>

<script>
export default {
    props: {
        errors: {
            type: [Array, Object],
            default: []
        },
        message: {
            type: String,
            required: true
        }
    },
    computed: {
        hasErrors() {
            if (this.errors.length != 0) { return true }
            return false
        }
    }
}
</script>