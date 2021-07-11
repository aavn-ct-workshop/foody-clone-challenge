import * as Keycloak from "keycloak-js";

let initOptions = {
  url: 'http://localhost/auth',
  realm: 'devnation',
  clientId: 'vue-app',
  onLoad: "login-required",
};

let keycloak = Keycloak(initOptions);
/**
 * Called to initialize the adapter.
 * Returns a promise that resolves when initialization completes
 */
function init() {
  return keycloak
    .init({
      onLoad: initOptions.onLoad,
      checkLoginIframe: false,
      redirectUri: location.origin,
      enableLogging: true
    })
}

export const keyCloakService = {
  init,
  keycloak
};
