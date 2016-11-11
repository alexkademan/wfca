// app.contactForm
// model: app.contactModel

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

var FormFieldCollection = require("./../models/contact_fields_collection");
var FormFieldView = require("./contact_field_view");

module.exports = Backbone.View.extend({
  el: '#contact_form',

  events: {
    "click .send": "checkForm",
  },


  render: function() {
    if( this.$el.length === 1 ){

      var template = _.template($("#contact-form-template").html());
      this.$el.html(template(this.model.toJSON()));

      // loop thru fields, make the collection, then render.
      var allFields = this.model.get('allFields')[0];
      app.contactFields = new FormFieldCollection();

      for (var key in allFields) {
        app.contactFields.add(allFields[key]);
      }
      app.contactFields.each(function(field){
        // view will render on init:
        var fieldView = new FormFieldView({model: field});
        app.contactForm.$("div.fields").append(fieldView.render().el);

      });

      console.log(this.$("input.send"));

    }
  },

  checkForm: function(e) {
    e.preventDefault();

  },

});
