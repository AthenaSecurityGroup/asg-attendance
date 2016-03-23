import openid from 'openid';

export default class SteamLogin {
  constructor(return_url, realm = null) {
    this.identifier = 'http://steamcommunity.com/openid';
    this.relyingParty = new openid.RelyingParty(
      return_url,
      realm,
      true,
      false
    );
  }

  authenticate() {
    return new Promise((resolve, reject) => {
      this.relyingParty.authenticate(this.identifier, false, (error, authUrl) => {
        if (error) {
          reject(error);
        } else {
          resolve(authUrl);
        }
      });
    });
  }

  verify(url) {
    return new Promise((resolve, reject) => {
      this.relyingParty.verifyAssertion(url, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
