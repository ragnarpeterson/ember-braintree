import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({

   actions: {
     onReady() {
       console.log('ready');
     },

     onPaymentMethodNonceReceived(response) {
       console.log(response);
     },

     onError(err) {
       console.log(err);
     }
   }

});
