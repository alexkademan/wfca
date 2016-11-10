// app.copyright

var Backbone = require ("backbone");
var _ = require ("underscore");
var $ = require ("jquery");

module.exports = Backbone.View.extend({
  el: "#js-parallax-window",

  initialize: function() {

    if(this.$el.length === 1){

      // this is a static var, so log it now, and use it in the
      // parallax method as needed.
      this.plxBackground = this.$("#js-parallax-background");

      this.parallax();
      this.model.on(
        {"change:vScrollPosition change:windowWidth": this.parallax}, this
      );
    };

  },


  parallax: function() {

    if( this.model.get("palmSize")  == false ){
      // only process this thing if we're not on a phone sized screen:
      var plxWindowTopToPageTop = this.$el.offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
      var plxBackgroundTopToPageTop = $(this.plxBackground).offset().top;
      var windowInnerHeight = window.innerHeight;
      var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
      var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
      var plxSpeed = 0.5;

      this.plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');


    } else {
      // we're smaller than the smallest of breakpoints...
      // so disable the parallax effect:
      this.plxBackground.css("top", "0px");
    }
  },

});
