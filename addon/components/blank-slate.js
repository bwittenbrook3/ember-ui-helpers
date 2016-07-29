import Ember from 'ember';
import layout from '../templates/components/loading-message';


const {Component} = Ember;


export default Component.extend({
	layout: layout,
	classNames: ["ember-ui-helpers-blank-slate"],
});
