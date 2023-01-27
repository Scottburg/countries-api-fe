<script>
export default {
  props: { country: { type: Object, required: true } },
  created() {},
};
</script>

<template>
  <section class="country-card">
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
