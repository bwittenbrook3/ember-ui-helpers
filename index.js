/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ui-helpers',
	included: function(app){
		app.import("bower_components/font-awesome/css/font-awesome.css");
		app.import("bower_components/sweetalert/dist/sweetalert.css");
		app.import("bower_components/sweetalert/dist/sweetalert-dev.js");
    app.import("vendor/fade-in.css");
    app.import("vendor/blank-slate.css");
    app.import("vendor/page-header.css");
    app.import("vendor/assets/sounds/errorNotification.mp3");
	}
};
