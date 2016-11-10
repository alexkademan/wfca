// app.contactModel

var Backbone = require ('backbone');

module.exports = Backbone.Model.extend({

  defaults: {

    yourName: [{
      fieldType: "text",
      fieldName: "yourName",
      labelName: "Your Name",
      emailLabelName: "Name",
      value: "",
    }],

    companyName: [{
      fieldType: "text",
      fieldName: "companyName",
      labelName: "Company",
      emailLabelName: "Company",
      value: "",
    }],

    timeToContact: [{
      fieldType: "text",
      fieldName: "timeToContact",
      labelName: "Best Time to Contact",
      emailLabelName: "Best Time to Contact",
      value: "",
    }],

  }

});
