<script>
import router from '../router';
import { auth } from '../store/auth.js';
export default {
    setup() {
        if (!auth.loggedin) {
            router.push('/login')
        }
    }
}
</script>
<template lang="">
    <router-view></router-view>
</template>
<style lang="">
    
</style>