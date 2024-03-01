<script>
import FavoriteIcon from './FavoriteIcon.vue';

export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    components: {
        FavoriteIcon
    }
}
</script>
<template lang="">
    <li class="bookbox">
        <section class="card">
            <article class="card-face card-face-front">
                <img :src="book.url" :alt="book.title">
            </article>
            <article class="card-face card-face-back">
                <section>
                    <FavoriteIcon aria-label="Toggle book favorite" :book="book"/>
                </section>
                <section>
                    <router-link :to="`/home/info/${book.id}`" aria-label="Book information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill="currentColor" d="M1.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM1 9.75A.75.75 0 0 1 1.75 9h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 9.75M1.75 12a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"/></svg>
                    </router-link>
                </section>
            </article>
        </section>
    </li>
</template>
<style lang="css" scoped>
    .bookbox {
        perspective: 1000px;
        cursor: pointer;

        & img {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }

    /* Rotate the card */
    
    .card {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 1s; /* Adjust as needed */
    }

    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        overflow: hidden;
    }

    .card-face-back {
        transform: rotateY(180deg);
        background-color: var(--dark-green);
        border-radius: 5px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        & section:last-child svg {
            color: var(--yellow);
        }
    }

    .bookbox:hover .card {
        transform: rotateY(180deg);
    }
</style>