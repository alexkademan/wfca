// app.contactModel

var Backbone = require ('backbone');

module.exports = Backbone.Model.extend({

  defaults: {

    fieldType: "text",
    fieldName: "emptyField",
    labelName: "Empty Field",
    emailLabelName: "FIELD LABEL",
    value: "",

  }

});
