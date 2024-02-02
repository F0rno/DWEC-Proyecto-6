<script>
import SearchBar from '../components/private/Searchs/SearchBar.vue';

export default {
    components: {
        SearchBar
    },
    methods: {
        onSubmit(input, type, sortedBy) {
            console.log(input, type, sortedBy)
        }
    }
}
</script>
<template lang="">
    <div class="wrapper">
        <SearchBar :onSubmit="onSubmit" />
    </div>
</template>
<style lang="" scoped>
    
</style>