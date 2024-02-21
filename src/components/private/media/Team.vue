<script>
import { auth } from '../../../stores/auth'

export default {
    props: {
        team: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            members: []
        }
    },
    methods: {
        getTeamName() {
            return this.team.name
        },
        async getTeamMembers() {
            const url = `${import.meta.env.VITE_API_URL}/reading-groups/${this.team.reading_group_id}/users`
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
            .then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        this.members = data.data
                    })
                }
            })
        },
        async leaveGroup() {
            const url = `${import.meta.env.VITE_API_URL}/reading-groups/${this.team.reading_group_id}/users/${auth.id}`
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
            .catch(error => {
                console.error('Error:', error)
            })
            .finally(() => {
                this.getTeamMembers()
            })
        },
        async joinGroup() {
            const url = `${import.meta.env.VITE_API_URL}/reading-groups/${this.team.reading_group_id}/users/${auth.id}`
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
            .catch(error => {
                console.error('Error:', error)
            })
            .finally(() => {
                this.getTeamMembers()
            })
        },
    },
    created() {
        this.getTeamMembers()
    }
}
</script>
<template lang="">
    <article class="team">
        <h2>{{ getTeamName() }}</h2>
        <ul>
            <li v-if="members.length === 0">No members yet</li>
            <li v-for="member in members" :key="member.id">
                {{ member.username }}
            </li>
        </ul>
        <section class="team__buttons">
            <button v-on:click="leaveGroup">
                LEAVE
            </button>
            <button v-on:click="joinGroup">
                JOIN
            </button>
        </section>
    </article>
</template>
<style lang="css" scoped>
    .team {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        margin: 1rem;
        width: 70vw;
        
        & h2 {
            font-family: 'Oswald', sans-serif;
            font-weight: 700;
            font-size: 3vh;
            color: var(--white);
            padding: 2vh;
            width: 100%;
            text-align: center;
            background-color: var(--dark-green);
        }

        & li {
            font-family: 'Oswald', sans-serif;
            font-weight: 300;
            font-size: 3vh;
            width: 100%;
            text-align: center;
        }
    }

    .team__buttons {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;

        & button {
            font-family: 'Roboto Mono', sans-serif;
            font-weight: 700;
            font-size: 2vh;
            padding: 1vh;
            background-color: var(--black);
            color: var(--light-green);
            border: none;
            cursor: pointer;
        }

        & button:last-child {
            color: var(--white);
        }
        
        & button:first-child {
            color: var(--red);
        }
    }

    @media (1200px <= width) {
        .team {
            justify-content: space-between;
            width: 33vh;
            height: 85%;
            margin: 0;
            margin-left: 2vh;
            margin-right: 2vh;

            & ul {
                overflow-y: scroll;
                height: 75%;
                scrollbar-width: none;
            }

            ::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>