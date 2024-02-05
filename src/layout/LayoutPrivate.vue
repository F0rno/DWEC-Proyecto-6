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
    <div class="wrapper">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>
<style lang="css" scoped>
    .wrapper {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
</style>