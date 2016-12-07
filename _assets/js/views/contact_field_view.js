// view for individual field.

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({

  tagName: 'span',

  events: {
    "change input":  "validate",
    "change textarea":  "validate",
  },

  initialize: function() {
    this.template = "";
    switch (this.model.get("fieldType")) {
      case "text":
        this.template = _.template($("#contact-form-text-field").html());
        break;

      case "textarea":
        this.template = _.template($("#contact-form-message-field").html());
        break;
      default:
        // this one isn't gonna render.
        // It doesnt fit the list of fields I have templates for.
    }

    if(this.model.get("required") === false){
      // this one isn't required, so automatically pass validation.
      this.model.set({valid: true});
    }

    this.model.on({"change:value": this.validate}, this);
    this.model.on({"change:checkField": this.validate}, this); // check with every increment

  },

  render: function() {
    if(this.template !== "") {
      this.$el.html(this.template(this.model.toJSON()));
      this.bindFieldEvents();

      if(this.model.get("required")){
        // this field is necessary, so cache the error message DOM element:
        this.errMessageDOM = this.$("span.err");
      }

      this.validate(); // initial check to give okay on test variables.
      return this;
    }
  },

  bindFieldEvents: function() {
    _.bindAll(this, 'validate');

    switch (this.model.get("fieldType")) {
      case "text":
        this.inputContent = this.$("input");
        break;

      case "textarea":
        this.inputContent = this.$("textarea");
        break;
    }
  },

  validate: function(e) {
    if(this.model.get("required")){
      // validate !!!

      if( this.inputContent.val() === "" ) {
        // the input is empty...
        this.model.set({valid: false});

        if(this.model.get("errMessageVisible")) {
          this.showErrorMessage();
        };


      } else {
        // there is something typed into the input field.
        this.model.set({valid: true});

        if(this.model.get("errMessageVisible")) {
          this.removeErrorMessage();
        }

      };
    }
  },

  showErrorMessage: function() {
    var theErrorMessage = "<strong>" + this.model.get("errMessage") + "</strong>";
    this.errMessageDOM.html(theErrorMessage);
  },

  removeErrorMessage: function() {
    this.errMessageDOM.html("");
  }

});
