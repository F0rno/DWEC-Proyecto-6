<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>
<template lang="">
    <li class="bookbox">
        <router-link :to="`home/info/${book.id}`"><img :src="book.url"></router-link>
    </li>
</template>
<style lang="css" scoped>
    .bookbox {
        cursor: pointer;

        & img {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }
/*
    @media (768px <= width) {
        .bookbox img {
            width: 200px;
            height: 300px;
        }
    }

    @media (1200px <= width) {
        .bookbox {
            height: 29vh;
            width: 21vh;
        }
    }
*/
</style>