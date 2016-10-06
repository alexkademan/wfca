var Backbone = require ('backbone');

module.exports = Backbone.Model.extend({
  defaults: { // these are mostly variables that stem from X-Cart.
    heading: false,
    skillName: '',
    percentage: 0,
    showing: false

  }
});
