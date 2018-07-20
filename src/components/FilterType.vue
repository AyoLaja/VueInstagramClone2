<template>
    <div class="filter-type">
        <p>{{filter.name}}</p>
        <div class="img"
            :class="filter.name"
            :style="{backgroundImage: 'url(' + image + ')'}"
            @click="selectFilter">
        </div>
    </div>
</template>

<script>
    import EventBus from '../eventBus'
    export default {
        props: {
            filter: {
                type: Object
            },
            image: {
                type: String
            }
        },
        methods: {
            selectFilter() {
                EventBus.$emit('filterSelected', {filter: this.filter.name})
            }
        }
    }
</script>

<style lang="scss" src="../styles/filter-type.scss">

</style>