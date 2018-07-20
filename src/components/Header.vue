<template>
    <div class="phone-header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png" />
        <a class="cancel-cta"
            v-if="step === 2 || step === 3"
            @click="handleCancel">
            Cancel
        </a>
        <a class="next-cta"
            v-if="step === 2"
            @click="step++">
            Next
        </a>
    </div>
</template>

<script>
export default {
    props: {
        step: {
            type: Number
        }
    },
    methods: {
        handleCancel() {
            this.$emit('cancel', this.step)
        }
    }
}
</script>

<style lang="scss" src="../styles/app.scss">

</style>


