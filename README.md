# ember-braintree

Braintree's Drop-In Payment UI as an Ember component.

## Installation

```bash
# From within your ember-cli project
ember install:addon ember-braintree
```

## Usage

```hbs
{{!-- Must be inside of a <form> --}}
{{braintree-dropin token=braintreeClientToken action='submit'}}
```

When the form is submitted, the specified `action` will be called with the Braintree nonce.
