<script>
import CountryCard from './CountryCard.vue';
import axios from 'axios';
export default {
  components: {
    CountryCard,
  },
  data() {
    return {
      countries: null,
      selectedCountries: [],
      inputValue: '',
      loading: true,
      regions: [
        'All',
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctic',
      ],
      selectedRegion: 'All',
    };
  },
  created() {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        this.countries = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
      });

    // Try to get this working with provide inject to allow access to this at country page level
  },
  methods: {
    async getCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    filterCountries() {
      let filter = this.inputValue;

      if (this.selectedRegion && this.selectedRegion !== 'All') {
        let filteredSelection = this.countries.filter((country) => {
          return (
            country.region.toLowerCase() === this.selectedRegion.toLowerCase()
          );
        });
        if (filter !== '') {
          filteredSelection = filteredSelection.filter((country) =>
            country.name.common.toLowerCase().includes(filter)
          );
        }
        this.selectedCountries = filteredSelection;
      } else {
        this.selectedCountries = this.countries.filter((country) =>
          country.name.common.toLowerCase().includes(filter)
        );
      }
    },
  },
};
</script>

<template>
  <main>
    <article>
      <input
        type="text"
        placeholder="Search for a country..."
        v-model="inputValue"
        v-on:input="filterCountries"
      />
      <div>REGION</div>
      <select
        name="filter-by-region"
        id="filter-by-region"
        v-model="selectedRegion"
        @change="filterCountries"
      >
        <option value="">Filter by region</option>
        <option v-for="(region, index) in regions" :key="index" :value="region">
          {{ region }}
        </option>
      </select>
    </article>
    <article>
      <div>GRID OF COUNTRIES CARDS</div>

      <div v-if="selectedCountries.length > 0" class="container">
        <div v-for="country in selectedCountries">
          <CountryCard :country="country" />
        </div>
      </div>
      <div
        v-else-if="(countries && selectedCountries === null) || !loading"
        class="container"
      >
        <div v-for="country in countries">
          <CountryCard :country="country" />
        </div>
      </div>
      <!-- <div v-if="selectedCountries.length === 0">No Countries Found</div> -->
      <div v-else-if="loading">Loading ....</div>
    </article>
  </main>
</template>

<style scoped></style>
