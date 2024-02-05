<script>
export default {
    props: {
        books: {
            type: Array,
            required: true,
            default: () => [{id: 1, cover: 'https://via.placeholder.com/150'}]
        }
    }
}
</script>
<template lang="">
    <article>
        <h2 v-if="books.length === 0">No media found</h2>
        <ul>
            <li v-for="book in books" :key="book.id">
                <router-link :to="`home/info/${book.id}`"><img :src="book.cover"></router-link>
            </li>
        </ul>    
    </article>
</template>
<style lang="" scoped>

</style>