'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-braintree': {

    },

    contentSecurityPolicy: {
      'script-src': "'self' https://js.braintreegateway.com https://client-analytics.sandbox.braintreegateway.com",
      'frame-src': "'self' https://assets.braintreegateway.com",
      'style-src': "'self' 'unsafe-inline'"
    }
  };
};
