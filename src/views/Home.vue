<script>
import SearchBar from '../components/private/searchs/SearchBar.vue';
import Feed from '../components/private/media/Feed.vue';
import { auth } from '../stores/auth';

export default {
    components: {
        SearchBar,
        Feed
    },
    data() {
        return {
            books: []
        }
    },
    methods: {
        askAPIForBooks(search) {
            const title = search ? search.title : '';
            const type = search ? search.type : 'B';
            const sort = search ? search.sort : 'N';
            const url = `${import.meta.env.VITE_API_URL}/books/search?title=${title}&type=${type}&sort=${sort}`;
            console.log(auth.token);
            fetch(url, {
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                this.books = data.data;
            })
            .catch(error => console.error(error));
        }    
    },
    created() {
        this.askAPIForBooks();
    }
}
</script>
<template lang="">
    <section class="home">
        <article class="home__search">
            <SearchBar :onSubmit="askAPIForBooks" />
        </article>
        <article class="home__feed-container">
            <Feed :books="books" />
        </article>
    </section>
</template>
<style lang="css" scoped>
    .home {
        background-color: var(--light-green);
    }
    
    .home__search {
        display: flex;
        justify-content: center;
        margin: 2vh 0;
        height: 10vh;
    }

    .home__feed-container {
        display: flex;
        justify-content: center;
    }

    @media (768px <= width) {
        .home__search {
            margin: 3vh 0;
        }
    }
</style>