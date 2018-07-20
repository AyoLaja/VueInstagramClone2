<template>
    <div class="phone-body">
        <div class="feed" v-if="step === 1">
            <app-vuegram 
                v-for="(post, index) in posts"
                :post="post"
                :key="index">
            </app-vuegram>
        </div>
        <div v-else-if="step === 2">
            <div class="selected-image"
                :class="selectedFilter"
                :style="{backgroundImage: 'url(' + image + ')'}">
            </div>
            <div class="filter-container">
                <app-filter-type v-for="(filter, index) in filters"
                    :filter="filter"
                    :image="image"
                    :key="index">
                </app-filter-type>
            </div>
        </div>
    </div>
</template>

<script>
import VueGram from './VuegramPost.vue';
import FilterType from './FilterType.vue' 

export default {
    components: {
        appVuegram: VueGram,
        appFilterType: FilterType
    },
    props: {
        posts: {
            type: Array
        },
        filters: {
            type: Array
        },
        step: {
            type: Number
        },
        image: {
            type: String
        },
        selectedFilter: {
            type: String
        }
    }
}
</script>

<style lang="scss" src="../styles/phone.scss">

</style>


