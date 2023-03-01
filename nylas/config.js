const Nylas = require('nylas');

// Set up the client library with your API credentials
Nylas.config({
  clientId: 'ctz8fve2w5pjofv3qv2arqanv',
  clientSecret: 'f1shkty0utfqvjkfcndh8ch22',
});

// Authenticate with the API
Nylas.oauth.authorize({
  // Redirect URL for OAuth flow
  redirectURI: 'http://localhost:3000/oauth/callback',
}, (err, token) => {
  if (err) {
    console.error(err);
  } else {
    // Fetch a list of messages
    Nylas.with(token).messages.list().then(messages => {
      console.log(messages);
    }).catch(error => {
      console.error(error);
    });
  }
});