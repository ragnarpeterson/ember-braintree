import Ember from 'ember';
import layout from '../templates/components/braintree-dropin';
import { InvokeActionMixin } from 'ember-invoke-action';

const { computed } = Ember;

export default Ember.Component.extend(InvokeActionMixin, {

  layout: layout,
  classNames: ['braintree-dropin'],

  braintreeEvents: [
    'onReady', 'onPaymentMethodNonceReceived', 'onError'
  ],
  options: {},
  token: null,

  didInsertElement() {

    this._super(...arguments);

    // Initialize the Braintree SDK
    const token = this.get('token');
    const options = Object.assign({
      container: this.get('elementId')
    }, this.get('options'));
    console.log(Object.assign(options, this.get('hooks')));
    if (token) {
      braintree.setup(token, 'dropin', options);
    }

    throw new Error('a valid Braintree token must be specified');
  },

  /**
   * Returns all of the valid Fullcalendar callback event
   * names that were passed into the component.
   */
  usedEvents: computed('braintreeEvents', function() {
    return this.get('braintreeEvents').filter(eventName => {
      const methodName = `_${eventName}`;
      return this.get(methodName) !== undefined || this.get(eventName) !== undefined;
    });
  }),

  /**
   * Returns an object that contains a function for each action passed
   * into the component. This object is passed into the Braintree SDK.
   */
  hooks: computed(function() {
    const actions = {};

    this.get('usedEvents').forEach((eventName) => {

      // create an event handler that runs the function inside an event loop.
      actions[eventName] = (...args) => {
        Ember.run.schedule('actions', this, () => {
          this.invokeAction(eventName, ...args, this.$());
        });
      };
    });

    return actions;
  })
});
