<script>
import { auth } from '../../../stores/auth';

export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isFav: false
        }
    },
    methods: {
        isFavorite(id) {
            const favorites = JSON.parse(localStorage.getItem(`favorites_${auth.user}`)) || [];
            return favorites.some(fav => fav.id === id);
        },
        addToFavorites() {
            const favorites = JSON.parse(localStorage.getItem(`favorites_${auth.user}`)) || [];
            favorites.push({ id: this.book.id, url: this.book.url });
            localStorage.setItem(`favorites_${auth.user}`, JSON.stringify(favorites));
        },
        removeFromFavorites() {
            const favorites = JSON.parse(localStorage.getItem(`favorites_${auth.user}`)) || [];
            const newFavorites = favorites.filter(fav => fav.id !== this.book.id);
            localStorage.setItem(`favorites_${auth.user}`, JSON.stringify(newFavorites));
        },
        toggleFavorite() {
            if (this.isFav) {
                this.removeFromFavorites();
            } else {
                this.addToFavorites();
            }
            this.isFav = !this.isFav;
        }
    },
    created() {
        this.isFav = this.isFavorite(this.book.id);
    }
}
</script>
<template lang="">
    <svg 
    v-if="isFav"
    class="favorite"
    v-on:click="toggleFavorite"
    xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 11.5c0 5.068-5.972 8.47-7.596 9.302a.875.875 0 0 1-.808 0C9.972 19.97 4 16.568 4 11.5C4 7 7.876 4 12 4c4.267 0 8 3 8 7.5Z"/><path d="m8.97 11.81l2.799 2.947c.092.097.139.146.195.157a.18.18 0 0 0 .072 0c.056-.011.103-.06.195-.157l2.799-2.946a1.806 1.806 0 1 0-2.898-2.107l-.07.128a.071.071 0 0 1-.124 0l-.07-.128A1.806 1.806 0 1 0 8.97 11.81Z"/></g></svg>

    <svg 
    v-else
    class="no-favorite"
    v-on:click="toggleFavorite"
    xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 11.5c0 5.068-5.972 8.47-7.596 9.302a.875.875 0 0 1-.808 0C9.972 19.97 4 16.568 4 11.5C4 7 7.876 4 12 4c4.267 0 8 3 8 7.5Z"/><path d="m8.97 11.81l2.799 2.947c.092.097.139.146.195.157a.18.18 0 0 0 .072 0c.056-.011.103-.06.195-.157l2.799-2.946a1.806 1.806 0 1 0-2.898-2.107l-.07.128a.071.071 0 0 1-.124 0l-.07-.128A1.806 1.806 0 1 0 8.97 11.81Z"/></g></svg>
</template>
<style lang="css" scoped>
    .no-favorite {
        color: var(--white);
    }

    .favorite {
        color: var(--red);
    }
</style>