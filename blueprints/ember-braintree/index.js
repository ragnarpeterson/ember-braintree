'use strict';

module.exports = {
  
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {

    const packages = [
      { name: 'braintree-web', '~2.27.0' },
      { name: 'braintree-oauth-connect', target: '~1.0.0' }
    ]

    return this.addBowerPackagesToProject(packages);
  }
};
