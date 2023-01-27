import { createRouter, createWebHistory } from 'vue-router';
import CountrySearchHome from '../components/CountrySearchHome.vue';
import CountryDetails from '../components/CountryDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: CountrySearchHome },
  {
    path: '/:countryName',
    name: 'CountryDetails',
    component: CountryDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
