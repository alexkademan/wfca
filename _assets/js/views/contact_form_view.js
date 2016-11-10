// app.contactForm
// model: app.contactModel

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({
  el: '#contact_form',

  initialize: function() {

    if( this.$el.length === 1 ){
      this.render();
    };

    // var template = _.template($('#contact-form-template').html());

  },

  render: function() {
    var template = _.template($('#contact-form-template').html());
    this.$el.html(template(this.model.toJSON()));

    return this; // enable chained calls
  }

});
