<script>
import { auth } from '../stores/auth';
import router from '../router';

export default {
    setup() {
        auth.logout();
        router.push('/');
    }

}
</script>
<template lang="">
</template>
<style lang="">
    
</style>