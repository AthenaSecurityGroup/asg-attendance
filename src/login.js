import openid from 'openid';

const IDENTIFIER = 'http://steamcommunity.com/openid';
const relyingParty = new openid.RelyingParty(
  '/verify',
  null,
  false,
  false
);

export function authenticate() {
  return new Promise((resolve, reject) => {
    relyingParty.authenticate(IDENTIFIER, false, (error, authUrl) => {
      if (error) {
        reject(error);
      } else {
        resolve(authUrl);
      }
    });
  });
}

export function verify(url) {
  return new Promise((resolve, reject) => {
    relyingParty.verifyAssertion(url, (error, result) => {
      if (error) {
        reject(error);
      } else {
       resolve(result);
      }
    });
  });
}
