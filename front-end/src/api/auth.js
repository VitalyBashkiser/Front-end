import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client;

async function createAuth0() {
  auth0Client = await createAuth0Client({
    domain: 'AUTH0_DOMAIN',
    client_id: 'CLIENT_ID',
  });
}

async function loginWithAuth0() {
  await auth0Client.loginWithRedirect();
}

async function handleAuth0Redirect() {
  await auth0Client.handleRedirectCallback();
  const user = await auth0Client.getUser();
  return user;
}

export { createAuth0, loginWithAuth0, handleAuth0Redirect };
