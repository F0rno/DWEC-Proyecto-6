<script>
import router from '../router';
import { auth } from '../store/auth.js';

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
            <span>
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
</style>