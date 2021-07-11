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
let accessToken
let authenticated = false;
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
    accessToken = this.$store.getters["authentication/getAccessToken"]
    if(accessToken && (accessToken != null)) {
      authenticated = true
    } else {
      authenticated = false
    }
    if (authenticated) {
      this.fetchMerchants();
    } else {
      keyCloakService.init().then((auth) => {
        if(!auth) {
          window.location.reload();
        } else {
          //require user login via the keycloakService
          //after login successfully, please update the access-token and username to the Vue store that you will use later.
          //fetch merchants after login
          this.$store.dispatch('authentication/updateAccessToken', keyCloakService.keycloak.token)
          accessToken = this.$store.getters["authentication/getAccessToken"]
          localStorage.loggedUserName = keyCloakService.keycloak.idTokenParsed.preferred_username
          console.log(localStorage.loggedUserName)
          this.fetchMerchants();
        }
      });
    }
    
  },
  methods: {
    fetchMerchants() {
      fetch(new URL(process.env.VUE_APP_MERCHANT_API, process.env.VUE_APP_BACKEND_URI), {
        headers: {
          "Content-Type": "application/json",
          // Merchant API required the authentication. Thus, you need to add the access token with the Authorization header
          Authorization: "Bearer " + accessToken,
        },}).then(
        response => response.json().then(
          data => this.merchants = data
        ));
    }
  },
};
</script>

<style></style>
