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
