var Backbone = require ('backbone');
var Field = require ('./contact_field_model');

module.exports = Backbone.Collection.extend({
  model: Field,

  modelId: function(attrs) {
    return attrs.date;
  }

});
