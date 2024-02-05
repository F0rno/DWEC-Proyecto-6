<script>
import router from '../router';
import { auth } from '../store/auth.js';
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
            <img src="./../assets/Booky.png" alt="">
        </header>
        <router-view></router-view>
        <footer class="auth__footer">

        </footer>
    </div>
</template>
<style lang="css" scoped>
    .wrapper {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 146px auto 32px;
        background-color: var(--darker-green);
    }

    .auth__header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--light-green);
        & img {
            max-height: 70%;
        }
    }

    .auth__footer {
        background-color: var(--light-green);
    }
</style>