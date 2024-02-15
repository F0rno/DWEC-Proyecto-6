<script>
import { auth } from '../../../stores/auth';

export default {
    data() {
        return {
            comments: [],
            commenting: false,
            comment: ''
        }
    },
    methods: {
        getComments() {
            const book_id = this.$route.params.id;
            fetch(`${import.meta.env.VITE_API_URL}/comments/search?book_id=${book_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                this.comments = data.data;
            })
            .catch(error => console.error(error));
        },
        validComment() {
            const regexComment = /^[ a-zA-Z0-9]{3,100}$/
            if (this.comment === '') {
                return false
            }
            return regexComment.test(this.comment)
        },
        postComment() {
            if (!this.validComment()) {
                return
            }
            const book_id = this.$route.params.id
            const comment = {
                username: auth.user,
                msg: this.comment,
                books_book_id: book_id
            }
            fetch(`${import.meta.env.VITE_API_URL}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                },
                body: JSON.stringify(comment)
            })
            .then(response => response.json())
            .then(data => {
                this.comments.push(data.comment)
            })
            .catch(error => console.error(error))
            .finally(() => {
                this.comment = ''
            })
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString()
        },
        creatingCommentOn() {
            this.commenting = true
        },
        creatingCommentOff() {
            this.commenting = false
        }
    },
    created() {
        this.getComments()
    }
}
</script>
<template lang="">
    <section class="commentbox">
        <ul 
        v-if="!commenting || comments!==[]">
            <span v-if="comments.length === 0">No comments yet</span>
            <li v-for="comment in comments" :key="comment.id">
                <h2>{{comment.username}}</h2>
                <p>{{comment.msg}}</p>
                <p>{{formatDate(comment.created_at)}}</p>
            </li>
        </ul>
        <article 
        class="commentbox__add-comment"
        v-if="commenting">
            <textarea v-model="comment" placeholder="Comment"></textarea>
            <button @click="postComment">Post</button>
        </article>
        <button 
        class="commentbox__add-comment-button"
        v-if="!commenting" 
        @click="creatingCommentOn">Add comment</button>
        <button 
        class="commentbox__close-add-comment-button"
        v-if="commenting" 
        @click="creatingCommentOff">Close comment</button>
    </section>
</template>
<style lang="css" scoped>
    .commentbox {
        width: 100%;
        padding: 2vh;
        background-color: var(--dark-green);
        border-radius: 0.5vh;
        color: var(--light-green);

        & h2 {
            font-size: 2.75vh;
        }

        & li {
            background-color: var(--medium-green);
            padding: 1vh;
            margin: 1vh 0;
            border-radius: 0.5vh;
            font-size: 2vh;

            & p {
                font-weight: 300;
            }

            & p:last-child {
                text-align: right;
            }
        }

        & textarea {
            width: 100%;
            height: 10vh;
            margin: 1vh 0;
            padding: 1vh;
            border-radius: 0.5vh;
            font-size: 2vh;
        }

        & article button {
            float: right;
        }

        & button {
            margin-bottom: 8px;
            color: var(--white);
            background-color: var(--medium-green);
            border: none;
            padding: 1vh;
            border-radius: 5px;
        }
    }

    @media (768px <= width) {
        .commentbox {
            padding: 2vh;
            padding-left: 5vh;
            padding-right: 5vh;
        }
    }

    @media (1200px <= width) {
        .commentbox {
            height: 30vh;
            overflow-y: auto;
        }
    }
</style>