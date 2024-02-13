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
        & li {
            width: 20vh;
            transform: rotate(0deg);
            transition: transform 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                transform: rotate(180deg);
            }

            & a img {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        }
    }
</style>