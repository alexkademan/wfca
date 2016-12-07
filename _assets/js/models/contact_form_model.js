// app.contactModel

var Backbone = require ('backbone');

module.exports = Backbone.Model.extend({

  defaults: {

    validEmailForm: false, // all forms have passed validation.
    validationErrMessage: "Please check that all required fields have been filled out.",

    allFields: [{

      yourName: [{
        fieldType: "text",
        fieldName: "yourName",
        labelName: "Your Name",
        emailLabelName: "Name",
        required: true,
        value: "",
        errMessage: "Please enter your name",
      }],

      companyName: [{
        fieldType: "text",
        fieldName: "companyName",
        labelName: "Company",
        emailLabelName: "Company",
      }],

      timeToContact: [{
        fieldType: "text",
        fieldName: "timeToContact",
        labelName: "Best Time to Contact",
        emailLabelName: "Best Time to Contact",
      }],

      phoneNumber: [{
        fieldType: "text",
        fieldName: "phoneNumber",
        labelName: "Phone",
        emailLabelName: "Phone",
      }],

      yourEmail: [{
        fieldType: "text",
        fieldName: "yourEmail",
        labelName: "Email",
        emailLabelName: "Return Email",
        required: true,
        value: "",
        errMessage: "Please enter a valid email address",
      }],

      message: [{
        fieldType: "textarea",
        fieldName: "contactMessage",
        labelName: "Message",
        emailLabelName: "Message",
        required: true,
        value: "",
      }],

    }],

  }

});
