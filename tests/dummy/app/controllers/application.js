import EmberObject, { computed } from '@ember/object';
import Controller from '@ember/controller';
import Notifyable from 'ember-ui-helpers/mixins/notifyable';

export default Controller.extend(Notifyable,{
  person: computed(function(){
    return EmberObject.create({
      address: "1234 Anywhere Lane",
      city: "Tampa",
      state: "FL",
      zip: "33601"
    });
  }),
  business: computed(function(){
    return EmberObject.create({
      name: "ParableSoft",
      address: "21 Jumpstreet",
      address2: "Suite 0",
      city: "Tampa",
      state: "FL",
      zip: "33601"
    });
  }),
  client: computed(function(){
    return EmberObject.create({
      fullName: "Joe Smith",
      street: "1234 Dormany Days Rd.",
      street2: "Shed #2",
      municipality: "Plant City",
      stateOrProvince: "Florida",
      postal: "33565-1234"
    });
  }),
  actions:{
    showSuccessMessage(){
      this.successMessage("Success!");
    }
  }
});
