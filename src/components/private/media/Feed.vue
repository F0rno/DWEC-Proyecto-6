<script>
import BookBox from './BookBox.vue';

export default {
    components: {
        BookBox
    },
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
            <BookBox id="feed__books__covers" v-for="book in books" :key="book.id" :book="book"></BookBox>
        </ul>    
    </section>
</template>
<style lang="css">
    .feed {
        width: 100%;

        & > h2 {
            text-align: center;
            color: var(--red);
        }
    }

    .feed__books {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
        gap: 1rem;
        justify-items: center;

        padding: 0 3vh 3vh 3vh;
    }

    #feed__books__covers {
        height: 30rem;
        width: 20rem;

        & img {
            border-radius: 5px;
        }
    }

    @media (768px <= width) {
        .feed__books {
            padding: 0 5vh 5vh 5vh;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }

        #feed__books__covers {
            height: 25rem;
            width: 15rem;
            padding: 1vh;
        }
    }

    @media (1024px <= width) {
        #feed__books__covers {
            height: 25rem;
            width: 15rem;
            padding: 1vh;
        }
    }

    @media (1200px <= width) {
        .feed__books {
            padding: 0 8vh 8vh 8vh;
        }
        
        #feed__books__covers {
            height: 29vh;
            width: 21vh;
            padding: 0;
        }
    }
</style>