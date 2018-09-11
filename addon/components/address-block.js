import Component from '@ember/component';
import layout from '../templates/components/address-block';

export default Component.extend({
  layout,
  classNames: ["ember-ui-helpers-address-block"],
  addressField: "address",
  address2Field: "address2",
  cityField: "city",
  stateField: "state",
  zipField: "zip",
  item: null,
});
