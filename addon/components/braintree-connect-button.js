import Ember from 'ember';
import layout from '../templates/components/braintree-connect-button';
import { InvokeActionMixin } from 'ember-invoke-action';

export default Ember.Component.extend(InvokeActionMixin, {

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
        container: this.get('elementId')
      }, this.get('options'));

      // Add the onError action if it was passed
      if (this.get('onError') !== undefined) {
        options.onError = (...args) => {
          Ember.run.schedule('actions', this, () => {
            this.invokeAction('onError', ...args);
          });
        };
      }

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
