<script>
import router from '../router';
import { auth } from '../stores/auth';

export default {
    setup() {
        if (auth.loggedin) {
            router.push('/home')
        }
    }
}
</script>
<template lang="">
    <div class="wrapper">
        <header class="auth__header">
        <router-link to="/">
            <img src="./../assets/Booky.png" alt="Booky logo">
        </router-link>
        </header>
        <router-view></router-view>
        <footer class="auth__footer"/>
    </div>
</template>
<style lang="css" scoped>
    .wrapper {
        display: grid;
        min-height: 100vh;
        grid-template-rows: 16vh auto 2.5vh;
    }

    .auth__header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--light-green);
        & img {
            height: 70%;
        }
    }

    .auth__footer {
        background-color: var(--light-green);
        height: 2.5vh;
    }
</style>