<script>
import { auth } from '../stores/auth'
import BookBox from '../components/private/media/BookBox.vue'

export default {
    components: {
        BookBox
    },
    methods: {
        getUserName() {
            return auth.user
        },
        getFavorites() {
            // get favorites from local storage
            const favorites = JSON.parse(localStorage.getItem(`favorites_${auth.user}`)) || []
            return favorites
        }
    }
}
</script>
<template lang="">
    <section class="profile">
        <article class="profile__data">
            <section class="profile__data__user">
                <p>
                    <strong>Hi </strong> {{ getUserName() }}
                </p>
            </section>
            <section class="profile__data__favorites">
                <h2>Favorites</h2>
                <p v-if="getFavorites().length === 0">You don't have any favorites yet</p>
                <ul>
                    <BookBox v-for="book in getFavorites()" :key="book.id" :book="book" />
                </ul>
            </section>
        </article>
    </section>
</template>
<style lang="css" scoped>
    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--light-green);
        padding-bottom: 2vh;
    }

    .profile__data__user {
        color: var(--dark-green);
        margin: 1.5rem;

        & p {
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            font-size: 4vh;

            & strong {
                font-family: 'Oswald', sans-serif;
                font-weight: 700;
                font-size: 5vh;
            }
        }
    }

    .profile__data__favorites {
        background-color: var(--dark-green);
        padding: 2vh;
        padding-left: 4vh;
        padding-right: 4vh;
        min-height: 40vh;
        min-width: 75vw;
        & h2 {
            color: var(--light-green);
            font-weight: bold;
            font-family: 'Oswald', sans-serif;
        }

        & p {
            color: var(--white);
            text-align: center;
        }

        & ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;   
            
            & li {
                margin: 1rem;
                
            }
        }
    }

    @media (768px <= width) {
        .profile__data__favorites {
            max-width: 90vw;
            min-height: 55vh;
            padding-top: 4vh;
            padding-bottom: 4vh;

            & h2 {
                font-size: 5vh;
            }

            & ul {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }

        .profile__data__user {
            & p {
                font-size: 6vh;

                & strong {
                    font-size: 8vh;
                }
            }
        }

        .profile__data__favorites ul {
            flex-direction: row;
            overflow-x: auto;
            overflow-y: hidden;
        }
    }

    @media (1200px <= width) {
        .profile__data__user {
            margin: 5vh;
            margin-bottom: 3vh;
        }
        .profile__data__favorites {
            padding-left: 8vh;
            padding-right: 8vh;
            width: 60vw;
            margin-bottom: 5vh;

            & h2 {
                font-size: 5.5vh;
                margin-bottom: 2vh;
            }

            & ul {
                flex-direction: row;
                align-content: stretch;

                & li {
                    margin: 0.5rem;
                }
            }
        }
    }
</style>