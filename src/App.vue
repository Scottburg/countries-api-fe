<script setup>
import CountrySearchHome from './components/CountrySearchHome.vue';
</script>

<template>
  <!-- <CountrySearchHome /> -->
  <div>HEADER HERE WITH DARK MODE TOGGLE - FLEX</div>
  <router-link to="/">Home</router-link>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
