// app.aboutPageStats

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

var SkillsCollection = require('../models/skills_collection');
var LIview = require('./list_item_view');

module.exports = Backbone.View.extend({

  el: '.skills',

  initialize: function() {

    if(this.$el.length > 0){

      for(i=0; i < this.$el.length; ++i) { // loop through each <UL>

        if(i === 0) { // this is the webSkills <UL>
          app.webSkills = new SkillsCollection(); // empty collection for stats on about page
          this.addLIs(this.$el[i], app.webSkills); // adds the <LI>s to the collection.
          this.$el[i].innerHTML = '';
          app.webSkills.each(this.renderLI, this);

        } else if (i === 1){ // this is the printSkills <UL>
          app.printSkills = new SkillsCollection(); // empty collection for stats on about page
          this.addLIs(this.$el[i], app.printSkills); // adds the <LI>s to the collection.
          this.$el[i].innerHTML = '';
          app.printSkills.each(this.renderLI, this);
        }

      }
    }
  },

  renderLI: function(object) {
    var view = new LIview({ model: object });
    var target = $('#' + view.model.get('list')); // this is a little sloppy, (can't cache this way)
    target.append(view.render().el); // does the actual rendering

    view.model.on('change:showing', function(){
      view.changeWidth();
    });

    if( view.model.get('skillName') !== '' ){
      this.showViewAnimation(view); // run once to see if the thing is already visible

      app.windowStatus.on('change:vScrollPosition', function(){
        app.aboutPageStats.showViewAnimation(view); // run when page gets scrolled
      });
    };

  },

  showViewAnimation: function(view) {
    // this method just checks to see if the view is on screen, or not yet scrolled down to.
    var liBaseLine = view.$el[0].offsetTop + view.$el[0].clientHeight;
    var bottomOfWindow = app.windowStatus.get('vScrollPosition') + app.windowStatus.get('windowHieght');

    if(
      app.windowStatus.get('bottomOfWindow') > liBaseLine
      && view.model.get('showing') === false
    ) {
      view.model.set({'showing': true});
    };

  },

  /* this function will fish thru the DOM nodes within a UL from the about page and set them up in the correct model */
  addLIs: function(thisList, thisCollection) {
    // console.log(thisList.id);
    for(n=0; thisList.children.length > n; ++n) { // look at every individual <LI>

      var thisObject = '';
      var thisItem = thisList.children[n];

      if(thisItem.firstChild.localName === 'h2'){ // this is the first <li> that acts as my title.
        thisObject = {
          heading: thisItem.innerText,
          showing: true,
          list: thisList.id
        }
      } else if( thisItem.firstChild.localName === 'em' ) {
        thisObject = {
          percentage: thisItem.firstChild.innerText, // whats within the <em>
          skillName: thisItem.innerText.substring(3),
          list: thisList.id
        }
      } else if ( thisItem.children[0].localName === 'em' ) {
        thisObject = {
          percentage: thisItem.children[0].innerText, // whats within the <em>
          skillName: thisItem.innerText.slice(0, -3),
          list: thisList.id
        }
      };

      if(thisObject){ thisCollection.add(thisObject); }
    }
  }

});
