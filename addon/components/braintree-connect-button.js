import Ember from 'ember';
import layout from '../templates/components/braintree-connect-button';

export default Ember.Component.extend({

  layout: layout,
  classNames: ['braintree-connect-btn'],

  connectUrl: null,
  options: {},


  didInsertElement() {

    this._super(...arguments);

    const connectUrl = this.get('connectUrl');

    // Ensure that a connect url was passed
    if (connectUrl) {

      // Setup options
      const options = Object.assign({
        connectUrl: connectUrl,
        container: this.get('elementId'),
        onError: this.get('onError')
      }, this.get('options'));

      // Create the Braintree Connect button
      return new BraintreeOAuthConnect(options);
    }

    // Throw an error if no connect url
    throw new Error('a valid connect url is required');
  },

  actions: {

    onError(err) {
      this.get('onError')(err);
    }
  }
});
