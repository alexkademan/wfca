// app.contactForm
// model: app.contactModel

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

var FormFieldCollection = require("./../models/contact_fields_collection");
var FormFieldView = require("./contact_field_view");

module.exports = Backbone.View.extend({
  el: '#contact_form',

  initialize: function() {
    if( this.$el.length === 1 ){
      this.render();
      this.formLoop();
    };
  },

  render: function() {
    var template = _.template($("#contact-form-template").html());
    this.$el.html(template(this.model.toJSON()));

    return this; // enable chained calls
  },

  formLoop: function() {
    // loop thru fields, make the collection, then render.
    app.contactFields = new FormFieldCollection();
    for (var key in this.model.attributes) {
      // console.log(this.model);
      app.contactFields.add(this.model.get(key));
    }

    console.log(app.contactFields);
    app.contactFields.each(function(field){

      var fieldView = new FormFieldView({model: field});

      console.log(field);

    });

  },

});
