// app.contactModel

var Backbone = require ('backbone');

module.exports = Backbone.Model.extend({

  defaults: {

    yourName: [{
      fieldType: "text",
      fieldName: "yourName",
      labelName: "Your Name",
      emailLabelName: "Name",
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
    }],

    message: [{
      fieldType: "textarea",
      fieldName: "contactMessage",
      labelName: "Message",
      emailLabelName: "Message",
    }],

  }

});
