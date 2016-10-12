// app.copyright

var Backbone = require ("backbone");
var _ = require ("underscore");
var $ = require ("jquery");

module.exports = Backbone.View.extend({
  el: "#js-parallax-window",

  initialize: function() {

    if(this.$el.length === 1){
      console.log("this is the parallax javascript controller.");
      this.parallax();
      this.model.on({
        "change:vScrollPosition change:windowWidth": this.parallax
      }, this);
    };

  },


  parallax: function() {
    var plxBackground = this.$("#js-parallax-background");

    var plxWindowTopToPageTop = this.$el.offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    // var plxSpeed = 0.35;
    var plxSpeed = 0.5;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  },

});
