
var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({
  tagName: 'li',

  render: function() {

    var template = _.template($('#item-template').html());
    this.$el.html( template(this.model.toJSON()) );

    this.zeroOutWidth();

    return this;
  },

  changeWidth: function() {
    if( this.model.get('showing') === true ){
      var theEm = this.$('em'),
          widthPercentage = this.model.get('percentage');
      setTimeout(function(){
        theEm.attr( "style", "width: " + widthPercentage + "%" );

      }, 10); // this needs to be timed ... zero isn't showing any CSS transition.
    };
  },

  zeroOutWidth: function() {
    var theEm = this.$('em');

    theEm.attr( "style", "width: 0%" );
  }

});
