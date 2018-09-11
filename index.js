'use strict';

module.exports = {
  name: 'ember-ui-helpers',
  isDevelopingAddon: function() {
    return true;
  },
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (parentAddon || app);
  // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    app.import("bower_components/sweetalert/dist/sweetalert.css");
    app.import("bower_components/sweetalert/dist/sweetalert-dev.js");
    app.import("vendor/assets/stylesheets/fade-in.css");
    app.import("vendor/assets/stylesheets/blank-slate.css");
    app.import("vendor/assets/stylesheets/page-header.css");
    app.import("vendor/assets/stylesheets/generic.css");
    app.import("vendor/assets/sounds/errorNotification.mp3");
  }
};
