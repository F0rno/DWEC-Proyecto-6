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
    <div class="wrapper">
        <section>
            <SearchBar :onSubmit="callAPI" />
        </section>
        <section>
            <Feed />
        </section>
    </div>
</template>
<style lang="" scoped>
    
</style>