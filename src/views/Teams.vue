<script>
import { auth } from '../stores/auth'
import Team from '../components/private/media/Team.vue'

// TODO: Make the teams wrow to under

export default {
    components: {
        Team
    },
    data() {
        return {
            teams: []
        }
    },  
    methods: {
        async getTeams() {
            const url = `${import.meta.env.VITE_API_URL}/reading-groups`
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
                        return this.teams = data
                    })
                }
            })
            .catch(error => {
                console.error('Error:', error)
            })
        }
    },
    mounted() {
        this.getTeams()
    }
}
</script>
<template lang="">
    <section class="teams">
        <Team v-for="team in this.teams" :key="team.id" :team="team" />
    </section>
</template>
<style lang="css" scoped>
    .teams {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: var(--light-green);
    }

    @media (1200px <= width) {
        .teams {
            flex-direction: row;
        }
    }
</style>