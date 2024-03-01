<script>
import router from '../router';
import { auth } from '../stores/auth';
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
    <main class="wrapper">
        <Header />
        <router-view></router-view>
        <Footer />
    </main>
</template>
<style lang="css" scoped>
    .wrapper {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
</style>