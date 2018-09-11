import { later } from '@ember/runloop';
import Mixin from '@ember/object/mixin';
import { observer, get } from '@ember/object';

export default Mixin.create({
  delay: null,
  didInsertElement() {
    let doNotFocus = get(this, "doNotFocus");
    if (!doNotFocus) {
      let delay = get(this, "delay");
      if (delay != null) {
        later(this, function () {
          this.focusMe();
        }, delay);
      } else {
        this.focusMe();
      }
    }
  },
  focusMe() {
    this.$()
      .focus();
  },
  refocus: observer("value", function () {
    let value = get(this, "value");
    if (value == null) {
      this.$()
        .focus();
    }
  }),
});