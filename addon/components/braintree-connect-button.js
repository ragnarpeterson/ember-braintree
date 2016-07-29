import Ember from 'ember';
import layout from '../templates/components/braintree-connect-button';
import { InvokeActionMixin } from 'ember-invoke-action';

export default Ember.Component.extend(InvokeActionMixin, {

  layout: layout,
  classNames: ['braintree-connect-btn'],

  connectUrl: null,


  didInsertElement() {

    this._super(...arguments);

    const connectUrl = this.get('connectUrl');

    if (connectUrl) {

      const options = Object.assign({
        connectUrl: connectUrl,
        container: this.get('elementId')
      }, this.get('options'));

      if (this.get('onError') !== undefined) {
        options.onError = (...args) => {
          Ember.run.schedule('actions', this, () => {
            this.invokeAction(eventName, ...args, this.$());
          });
        };
      }

      return new BraintreeOAuthConnect(options);
    }

    throw new Error('a valid connect url is required');
  },

  actions: {

    onError(err) {
      this.get('onError')(err);
    }
  }
});
