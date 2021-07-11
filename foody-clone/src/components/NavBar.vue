<template>
  <div id="navbar">
    <span id="logout">
      <Button label="Logout" icon="pi pi-sign-out" @click="logout"/>
    </span>
  </div>
</template>

<script>
import { keyCloakService } from '../assets/js/services/keycloak-service';

export default {
  name: "NavBar",
  methods: {
    logout() {
      //Perform logout via keycloakService
      let redirect = {redirectUri: 'http://localhost:8081'};
      keyCloakService.keycloak.init().then(keyCloakService.keycloak.logout(redirect));
      localStorage.removeItem("loggedUserName")
      this.$store.dispatch('authentication/updateAccessToken', null)
    },
  },
};
</script>
<style scoped>
#navbar {
  display: flex;
  justify-content: flex-end;
}
</style>
