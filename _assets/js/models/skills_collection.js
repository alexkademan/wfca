var Backbone = require ('backbone');
var Skillset = require ('./skillset');

module.exports = Backbone.Collection.extend({
    model: Skillset
});
