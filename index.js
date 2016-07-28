/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-braintree',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/braintree-web/dist/braintree.js', {
      prepend: true
    });
  }
};
