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

      this.progressShader = this.$(".progress");
      this.footNote = this.$("span.footnote");

      // the form is rendered, change the focus to the first input field:
      // this.$("input")[0].focus();

    }
  },

  checkForm: function(e) {
    e.preventDefault();

    // set to true, then loop to see if should be false:
    this.model.set({validEmailForm : true});

    app.contactFields.each(function(field){
      if(field.get("required")){

        // set error messgage to true now that we've clicked "Send mail" button
        // add increment to checkField, so that we will run the validation process.
        field.set({
          errMessageVisible: true,
          checkField: field.get("checkField") + 1
        });

        // once the submit button has been pressed, start telling the client
        // if their required fields have been validated or not:
        // field.set({errMessageVisible: true});
        if(field.get("valid") === false) {
          // console.log(field.get("labelName") + " is not valid");
          app.contactModel.set({validEmailForm : false});
        }
      }
    });

    if(this.model.get("validEmailForm") === true){

      this.progressShader.removeClass("hid");
      this.footNote.html("sending...");

      // send away!
      $.ajax({
        url: "//formspree.io/alex@designbymodus.com",
        type: "post",
        data: this.$("form").serialize(),
        dataType: "html",

        success: function(result){
          app.contactForm.messageSent(result);
        }
      });

    } else {
      // email isn't passing validation.
      this.footNote.html("<strong>" + this.model.get("validationErrMessage") + "</strong>");
    }

  },

  messageSent: function(result) {

    this.$("input.send").addClass("hid");

    // result == the contents of the HTML that thanks the client for sending an email.
    this.footNote.html(result);
  }

});
