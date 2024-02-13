<script>
import router from '../router';
import { auth } from '../store/auth.js';
import Header from '../components/private/layout/Header.vue';
import Footer from '../components/private/layout/Footer.vue';

export default {
    components: {
        Header,
        Footer
    },
    setup() {
        if (!auth.loggedin) {
            router.push('/login')
        }
    }
}
</script>
<template lang="">
    <Header />
    <router-view></router-view>
    <Footer />
</template>
<style lang="css">
    #app {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
</style>