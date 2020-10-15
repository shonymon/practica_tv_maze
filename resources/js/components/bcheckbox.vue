<template>
    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input type="checkbox"  
                    v-model="computedValue"
                    :value="newValue">
                {{label}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            newValue: this.value
        }
    },
    watch: {
        value(value) {
            this.newValue = value
        }
    },
    computed: {
        computedValue: {
            get() { return this.newValue },
            set(value) {
                this.newValue = value
                this.$emit('input', value)
            }
        }
    },
}
</script>