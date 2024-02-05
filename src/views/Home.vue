<script>
import SearchBar from '../components/private/searchs/SearchBar.vue';
import Feed from '../components/private/media/Feed.vue';

export default {
    components: {
        SearchBar,
        Feed
    },
    methods: {
        callAPI(input, type, sortedBy) {
            console.log(input, type, sortedBy)
        }
    }
}
</script>
<template lang="">
    <section class="home-container">
        <article>
            <SearchBar :onSubmit="callAPI" />
        </article>
        <article>
            <Feed />
        </article>
    </section>
</template>
<style lang="" scoped>
    
</style>