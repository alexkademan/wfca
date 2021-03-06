
var WindowStatsModel = require('./models/window_stats_model');
var WindowStatsView = require('./views/window_stats_view');

var MainNavModel = require('./models/main_nav_model');
var MainNavView = require('./views/main_nav_view');

// var WPadminHider = require('./views/wp_admin_hider_view');
var ParallaxWindow = require('./views/parallax_view');
var Copyright = require('./views/copyright_view');

var ContactModel = require('./models/contact_form_model');
var ContactForm = require('./views/contact_form_view');

var domReady = require('domready');


module.exports = {
  // this is the the whole app init'er
  blastoff: function () {
    var self = window.app = this;

    // wait for document ready to render our main view
    // this ensures the document has a body, etc.
    domReady(function () {

      app.windowStatus = new WindowStatsModel();
      app.windowStatusView = new WindowStatsView({model : app.windowStatus});

      app.mainNavModel = new MainNavModel();
      app.mainNav = new MainNavView({ model: app.mainNavModel });

      app.parallaxWindow = new ParallaxWindow({model : app.windowStatus});
      app.copyright = new Copyright();

      app.contactModel = new ContactModel();
      app.contactForm = new ContactForm({model: app.contactModel});
      app.contactForm.render();

    });

  }
}

// run it
module.exports.blastoff();
