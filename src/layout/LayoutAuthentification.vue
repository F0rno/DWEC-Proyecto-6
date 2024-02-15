<script>
import router from '../router';
import { auth } from '../store/auth.js';
// TODO: Add a wrapper div to the template to be able to set the scope of the styles close

export default {
    setup() {
        if (auth.loggedin) {
            router.push('/home')
        }
    }
}
</script>
<template lang="">
    <header class="auth__header">
        <router-link to="/">
            <img src="./../assets/Booky.png" alt="">
        </router-link>
    </header>
    <router-view></router-view>
    <footer class="auth__footer"/>
</template>
<style lang="css" scoped>
    #app {
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