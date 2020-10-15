<template>
    <div class="control" :class="classoptions">
        <div class="tags has-addons">
            <span class="tag">{{name}}</span>
            <span class="tag is-info">{{value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: [String, Number, Boolean],
            required: true
        },
        classoptions: {
            type: String,
            default: 'mb-4'
        }
    }
}
</script>