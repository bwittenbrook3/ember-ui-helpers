import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | textarea auto focus', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs `{{textarea-auto-focus}}`);

    assert.dom('*')
      .hasText('');

    // Template block usage:
    await render(hbs `
      {{#textarea-auto-focus}}
        template block text
      {{/textarea-auto-focus}}
    `);

    assert.dom('*')
      .hasText('template block text');
  });
});