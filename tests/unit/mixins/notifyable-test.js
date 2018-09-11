import EmberObject from '@ember/object';
import NotifyableMixin from 'ember-ui-helpers/mixins/notifyable';
import { module, test } from 'qunit';

module('Unit | Mixin | notifyable', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let NotifyableObject = EmberObject.extend(NotifyableMixin);
    let subject = NotifyableObject.create();
    assert.ok(subject);
  });
});
