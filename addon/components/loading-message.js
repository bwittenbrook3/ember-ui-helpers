import Component from '@ember/component';
import layout from '../templates/components/loading-message';

export default Component.extend({
  layout: layout,
  message: "Loading ...",
  classNames: ["ember-ui-helpers-loading-message"],
  useFadeIn: true,
  classNameBindings: ["useFadeIn:fade-in"]
});
