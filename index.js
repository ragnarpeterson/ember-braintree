/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-braintree',

  contentFor: function(type) {
    if (type === 'body') {
      return '<script src="https://js.braintreegateway.com/v2/braintree.js"></script>';
    }
  },
};
