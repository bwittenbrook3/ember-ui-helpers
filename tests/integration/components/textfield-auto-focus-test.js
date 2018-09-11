import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | textfield auto focus', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs `{{textfield-auto-focus}}`);

    assert.dom('*')
      .hasText('');

    // Template block usage:
    await render(hbs `
      {{#textfield-auto-focus}}
        template block text
      {{/textfield-auto-focus}}
    `);

    assert.dom('*')
      .hasText('template block text');
  });
});