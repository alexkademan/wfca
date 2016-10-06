var Backbone = require ('backbone');
// var Category = require ('./category');

module.exports = Backbone.Model.extend({

  defaults: {
    backgroundPercentage: 0, // tenths of a second
    count: 0
  }
});
