<script setup>
import router from './router';

</script>

<template>
  <h1>App</h1>
  <div>
    <router-link to="/home">Home</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>

</style>
