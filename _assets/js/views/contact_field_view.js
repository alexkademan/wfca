// view for individual field.

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({

  tagName: 'span',

  initialize: function() {
    console.log(this.model);
  }

});
