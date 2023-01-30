<script>
export default {
  // inject: ['countriesData'],
  // created() {
  //   console.log(this.countriesData); // injected value
  // },
  methods: {
    showDetails() {
      const currentCountry = props.country.name.common.toLowerCase();
      router.push({ name: `/${currentCountry}`, params: this.country });
    },
  },
};
</script>
<!-- : tells vue js is to be used rather than a string for-->

<template>
  <router-link :to="country.name.common">
    <section class="country-card" @click="showDetails()">
      <img :src="country.flags.png" :alt="`${country.name.common} flag`" />
      <h4>{{ country.name.common }}</h4>
      <h4>Population:{{ country.population }}</h4>
      <p>Region: {{ country.region }}</p>
      <p>Capital: {{ country.capital ? country.capital[0] : 'None' }}</p>
    </section>
  </router-link>
</template>

<style>
.country-card {
  border: 1px black;
}
</style>
