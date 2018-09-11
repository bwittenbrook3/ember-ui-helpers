import EmberObject from '@ember/object';
import AutoFocusControlMixin from 'ember-ui-helpers/mixins/auto-focus-control';
import { module, test } from 'qunit';

module('Unit | Mixin | auto focus control', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let AutoFocusControlObject = EmberObject.extend(AutoFocusControlMixin);
    let subject = AutoFocusControlObject.create();
    assert.ok(subject);
  });
});
