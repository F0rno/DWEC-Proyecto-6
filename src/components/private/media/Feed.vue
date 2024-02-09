<script>
export default {
    props: {
        books: {
            type: Array,
            required: true
        }
    }
}
</script>
<template lang="">
    <section class="feed">
        <h2 v-if="books.length === 0">No media found</h2>
        <ul class="feed__books">
            <li v-for="book in books" :key="book.id">
                <router-link :to="`home/info/${book.id}`"><img :src="book.url"></router-link>
            </li>
        </ul>    
    </section>
</template>
<style lang="css" scoped>
    .feed {
        width: 100%;

        & > h2 {
            text-align: center;
            color: var(--red);
        }

        & img {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }

    .feed__books {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        justify-items: center;

        & li {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>