<script>
import { auth } from '../store/auth'
import CommentBox from '../components/private/media/CommentBox.vue'

export default {
    components: {
        CommentBox
    },
    data() {
        return  {
            book:  {
                cover: '',
                title: '',
                author: '',
                publisher: '',
                description: '',
            }
        }
    },
    methods: {
        askAPIForBookInfo() {
            const bookData = {
                cover: '',
                title: '',
                author: '',
                publisher: '',
                description: '',
            }
            const id = this.$route.params.id
            let url = `${import.meta.env.VITE_API_URL}/books/${id}`
            // Get cover and title
            fetch(url, {
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                bookData.cover = data.data.url
                bookData.title = data.data.title || 'Unknown'
            })
            .catch(error => console.error(error))
            // Get full description
            url = `${import.meta.env.VITE_API_URL}/descriptions/${id}`
            fetch(url, {
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                bookData.author = data.data.author || 'Unknown'
                bookData.publisher = data.data.published || 'Unknown'
                bookData.description = data.data.description || 'No description available'
                this.book = {...bookData}
            })
            .catch(error => console.error(error))
        }
    },
    created() {
        this.askAPIForBookInfo()
    }
}
</script>
<template lang="">
    <section class="info">
        <article class="info__cover">
            <img :src="book.cover" alt="{{book.title}}">
        </article>
        <article class="info__data">
            <h2>Title</h2>
            <p>{{book.title}}</p>
            <h2>Author</h2>
            <p>{{book.author}}</p>
            <h2>Publisher</h2>
            <p>{{book.publisher}}</p>
            <h2>Description</h2>
            <p>{{book.description}}</p>
        </article>
        <article class="info__comments">
            <CommentBox />
        </article>
    </section>
</template>
<style lang="css" scoped>
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    html {
        scrollbar-width: none; /* For Firefox */
        -ms-overflow-style: none; /* For Internet Explorer and Edge */
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2vh;
    }

    .info__cover {
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
            overflow: hidden;
            width: 50vh;
            filter: drop-shadow(2px 4px 6px var(--black));
        }
    }

    .info__data {
        padding: 2vh;
        padding-left: 0vh;
        padding-right: 0vh;

        & > h2 {
            margin-bottom: 1vh;
            font-family: 'Oswald', sans-serif;
            color: var(--darker-green);
            font-size: 3vh;
        }

        & > p {
            margin-bottom: 2vh;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            color: var(--darker-green);
            font-size: 2vh;
        }
    }

    .info__comments {
        padding: 2vh;
        padding-left: 0vh;
        padding-right: 0vh;
        width: 100%;
    }

    @media (768px <= width) {
        .info__data {
            padding: 3vh;
            padding-left: 5vh;
            padding-right: 5vh;
        }
    }

    @media (1200px <= width) {
        .info {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 3vh;
            padding: 3vh;
            padding-left: 30vh;
            padding-right: 30vh;
            max-height: 85vh;
            background-color: var(--light-green);
        }

        .info__data {
            grid-row: 1 / 3;
            max-height: 100%;
            overflow-y: auto;
            padding-top: 2vh;
            padding-bottom: 2vh;
            padding-left: 0vh;
            padding-right: 0vh;

            & > h2 {
                font-size: 2.75vh;
            }

            & > p {
                font-size: 1.75vh;
            }
        }

        .info__cover {
            grid-column: 1 / 2;
            grid-row: 1 / 4;
            display: flex;
            justify-content: center;
            align-items: center;

            & > img {
                overflow: hidden;
                width: 50vh;
            }
        }
    }    
</style>