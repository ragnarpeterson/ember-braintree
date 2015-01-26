/* global braintree */

import Em from 'ember';

export default Em.Component.extend({
  action: 'processBraintreeNonce',
  token: null,

  _setup: function() {
    var handler = Em.run.bind(this, this._handler),
        token = this.get('token');

    braintree.setup(token, 'dropin', {
      container: this.elementId,
      paymentMethodNonceReceived: handler
    });
  }.on('didInsertElement'),

  _handler: function(event, nonce) {
    this.sendAction('action', nonce);
    return false;
  }
});
