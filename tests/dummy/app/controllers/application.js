import Ember from 'ember';
const {Controller} = Ember;

export default Controller.extend({

  connectUrl: '[YOUR CONNECT URL]',
  token: '[YOUR TOKEN]',

  actions: {
    onReady() {
      console.log('Braintree Drop-in UI is ready.');
    },

    onSubmit(response) {
      console.log(`Payment nonce recieved: ${response.nonce}`);
    },

    onError(err) {
      console.log('There was an error.');
    }
  }

});
