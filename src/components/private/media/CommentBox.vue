<script>
import { auth } from '../../../store/auth';

/* 
get http://localhost/api/comments/search
{
  "book_id":"01EZAwAAQBAJ"
}
{
  "data": [
    {
      "username": "hola",
      "msg": "xd",
      "created_at": "2024-02-14T00:00:00.000000Z"
    }
  ],
 
post http://localhost/api/comments
{
  "comment": {
    "username": "hola",
    "msg": "xd",
    "books_book_id": "01EZAwAAQBAJ",
    "updated_at": "2024-02-14T09:02:27.000000Z",
    "created_at": "2024-02-14T09:02:27.000000Z",
    "comment_id": 1
  },
  "message": "Comment created successfully"
}
*/

export default {
    data() {
        return {
            comments: [],
            commenting: undefined
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
        postComment() {
            const book_id = this.$route.params.id;
            const comment = {
                username: this.commenting.username,
                msg: this.commenting.msg,
                books_book_id: book_id
            };
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
                this.comments.push(data.comment);
            })
            .catch(error => console.error(error));
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        }
    },
    created() {
        this.getComments();
    }
}
</script>
<template lang="">
    <section class="commentbox">
        <ul>
            <span v-if="comments.length === 0">No comments yet</span>
            <li v-for="comment in comments" :key="comment.id">
                <h2>{{comment.username}}</h2>
                <p>{{comment.msg}}</p>
                <p>{{formatDate(comment.created_at)}}</p>
            </li>
        </ul>
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