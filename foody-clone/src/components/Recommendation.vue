<template>
  <h2>Recommentdations</h2>
  <div class="p-grid p-jc-center p-mt-5">
    <a
      v-for="merchant in merchants"
      :key="merchant.id"
      @click="$router.push('/merchant/' + merchant.id)"
      class="p-col-2"
    >
      <img width="80" :src="merchant.image" alt="Picture" />
      <br />
      <span class="p-text-center">
        {{ merchant.name }}
      </span>
    </a>
  </div>
</template>

<script>
import { keyCloakService } from '../assets/js/services/keycloak-service';
export default {
  name: "Recommentdation",
  data() {
    return {
      merchants: [],
    };
  },
  created() {
    //Please check the authentication before fetching Merchants
    // Hint: checking based on the access-token is exist or not
    if (authenticated) {
      this.fetchMerchants();
    } else {
      //require user login via the keycloakService
      //after login successfully, please update the access-token and username to the Vue store that you will use later.
      //fetch merchants after login
    }
    
  },
  methods: {
    fetchMerchants() {
      fetch(new URL(process.env.VUE_APP_MERCHANT_API, process.env.VUE_APP_BACKEND_URI), {
        headers: {
          "Content-Type": "application/json",
          // Merchant API required the authentication. Thus, you need to add the access token with the Authorization header
          Authorization: "Bearer " + 'specific access-token',
        },}).then(
        response => response.json().then(
          data => this.merchants = data
        ));
    }
  },
};
</script>

<style></style>
