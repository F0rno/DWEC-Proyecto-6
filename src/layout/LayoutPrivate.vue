<script>
import router from '../router';
import { auth } from '../stores/auth';
import Header from '../components/private/layout/Header.vue';
import Footer from '../components/private/layout/Footer.vue';
// TODO: Add a wrapper div to the template to be able to set the scope of the styles close

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