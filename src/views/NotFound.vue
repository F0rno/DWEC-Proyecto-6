<script>
import router from '../router';
import { auth } from '../stores/auth'

export default {
    methods: {
        returnToApp() {
            if (auth.loggedin) {
                router.push('/home');
            } else {
                router.push('/');
            }
        }
    }
}
</script>
<template lang="">
    <section class="error-container">
        <article class="error" @click="returnToApp">
            <h2>
            ERROR
            </h2>
            <span class="pulse">
                404
            </span>
            <h2>
                PAGE NOT FOUND
            </h2>
        </article>
    </section>
</template>

<style lang="css" scoped>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: var(--light-green);
    }
    .error {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        user-select: none;

        & h2 {
            font-family: 'Roboto Mono', sans-serif;
            font-size: 2rem;
            font-weight: 400;
        }

        & span {
            font-family: 'Roboto Mono', sans-serif;
            font-size: 13rem;
            font-weight: bold;
        }
    }

    /* Animation for pulse 404 */

    .pulse {
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
</style>