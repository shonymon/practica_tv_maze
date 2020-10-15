<template>
    <div class="field">
        <label class="label">{{label}}</label>
        <div class="control" :class="hasIconLeft">
            <input class="input"
                :class="checkErrors"
                :type="type"
                :placeholder="placeholder"
                :value="computedValue" 
                @input="onInput">
            <span class="icon is-small is-left" 
                v-if="hasIconLeft != ''">
                <i :class="icon"></i>
            </span>
        </div>
        <p class="help is-danger" v-if="hasErrors">
            {{inputErrorMsg(errors, errorname)}}
        </p>
    </div>
</template>

<script>
import tools from '../tools'

export default {
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        hasiconleft: {
            type: Boolean,
            default: false
        },
        errors: {
            type: [Array, Object],
            default: function () { return [] }
        },
        errorname: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            newValue: this.value
        }
    },
    computed: {
        checkErrors() {
            if (this.hasErrors) {
                return this.inputError(this.errors, this.errorname, 'is-danger')
            }
            return ''
        },
        hasIconLeft() {
            if (this.hasiconleft) { return 'has-icons-left' }
            return ''
        },
        hasErrors() {
            if (this.errors.length != 0) { return true }
            return false
        },
        computedValue: {
            get() { return this.newValue },
            set(value) {
                this.newValue = value
                this.$emit('input', value)
            }
        }
    },
    methods: {
        onInput(event) {
            this.computedValue = event.target.value
        },
        inputError: tools.inputError,
        inputErrorMsg: tools.inputErrorMsg
    }
}
</script>