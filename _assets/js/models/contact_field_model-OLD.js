// app.contactModel

var Backbone = require ('backbone');

module.exports = Backbone.Model.extend({

  defaults: {

    fieldType: "text",
    fieldName: "emptyField",
    labelName: "Empty Field",
    emailLabelName: "FIELD LABEL",
    value: "", // default value
    valid: false, // passing validation for form submission.
    required: false,
    errMessage: "This cannot be left blank",
    errMessageVisible: false, // true if the submit button has been clicked.

    checkField: 0, // increment everytime I need to validate this specific field.

  }

});
