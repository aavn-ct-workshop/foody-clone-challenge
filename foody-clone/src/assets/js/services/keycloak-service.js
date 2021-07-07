import * as Keycloak from "keycloak-js";

let initOptions = {
  url: '//Define your keycloak server',
  realm: '//Define your realm',
  clientId: '//Define your client-id',
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
