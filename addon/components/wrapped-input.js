import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import layout from '../templates/components/wrapped-input';


export default Component.extend({
  layout,
  classNames: ["form-group"],
  autoFocusDelay: null,

  placeholderText: computed("placeholder", "labelText", function () {
    let { placeholder, labelText } = this.getProperties("placeholder", "labelText");
    return isPresent(placeholder) ? placeholder : labelText;
  }),

  actions: {
    focusOut() {
      if (this.get('onFocusOut')) {
        this.get('onFocusOut')()
      }
    },
  }
});