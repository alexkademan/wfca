// view for individual field.

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({

  tagName: 'span',

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


    this.model.on({"change:value": this.validate}, this);

  },

  render: function() {
    if(this.template !== "") {
      this.$el.html(this.template(this.model.toJSON()));
      this.bindFieldEvents();
      return this;
    }
  },

  events: {
    "change input":  "validate"
  },

  bindFieldEvents: function() {
    // console.log(this.model.get("fieldName"));


    _.bindAll(this, 'validate');
    this.inputContent = this.$("input");
  },

  validate: function(e) {
    console.log('validate');
  },

});
