<script>
export default {
  props: { country: { type: Object, required: true } },
  created() {
    // console.log(this.country);
  },

  // created() {
  //   console.log(this.props);
  // },
};

// const countryDetails = {
//   population: props.country.population.toLocaleString(),
//   region: props.country.region,
//   capital: props.country.capital?.[0],
// };
// const showDetails = () => {
//   const currentCountry = props.country.name.common.toLowerCase();
//   router.push({ path: `/${currentCountry}` });
// };
</script>

<template>
  <section class="country-card">
    <!-- COUNTRY CARD {{ country }} -->
    <img
      :src="country.flags.png"
      :alt="`${country.name.common} flag`"
      @click="toggleModal"
    />
    <h4>{{ country.name.common }}</h4>
    <h4>Population:{{ country.population }}</h4>
    <p>Region: {{ country.region }}</p>
    <p>Capital: {{ country.capital ? country.capital[0] : 'None' }}</p>
  </section>
</template>

<style>
.country-card {
  border: 1px black;
}
</style>
