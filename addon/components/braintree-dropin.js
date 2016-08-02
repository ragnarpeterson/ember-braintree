import Ember from 'ember';
import layout from '../templates/components/braintree-dropin';

export default Ember.Component.extend({

  layout: layout,
  classNames: ['braintree-dropin'],

  customerId: null,
  options: {},
  token: null,


  didInsertElement() {

    this._super(...arguments);

    // Initialize the Braintree SDK
    const token = this.get('token');
    const options = Object.assign({
      container: this.get('elementId'),
      onError: this.get('onError'),
      onPaymentMethodReceived: this.get('onSubmit'),
      onReady: this.get('onReady')
    }, this.get('options'));

    if (token) {
      braintree.setup(token, 'dropin', options);
    }
    else {
      throw new Error('a valid Braintree token must be specified');
    }
  },

  actions: {

    onReady(...args) {
      this.get('onReady')(...args);
    },

    onSubmit(...args) {
      this.get('onSubmit')(...args);
    },

    onError(...args) {
      this.get('onError')(...args);
    }
  }
});
