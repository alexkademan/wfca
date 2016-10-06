// app.copyright

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({
  el: 'span.date_year',

  initialize: function() {
    var today = new Date(),
         year = today.getFullYear();
         
    this.$el.html( year + ' ' );
  }

});
