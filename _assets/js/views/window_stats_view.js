// app.windowStatusView

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({

    el: window,

    initialize: function() {

        app.windowStatus.set({
            'vScrollLastPosition': $(document).scrollTop()
        });

        this.updatePageSize();
        this.$el.on('resize', this.updatePageSize);
        this.$el.on('scroll', this.updatePageSize);


    },

    updatePageSize: function() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            documentWidth = $(document).width(),
            documentHeight = $(document).height(),
            vScrollPosition = $(document).scrollTop();
            // hScrollPosition = $(document).scrollLeft();

        app.windowStatus.set({
            windowWidth: windowWidth,
            windowHeight: windowHeight,
            documentWidth: documentWidth,
            documentHeight: documentHeight,
            vScrollPosition: vScrollPosition
        });

        if (windowWidth > app.windowStatus.get('palmWidth')){
            app.windowStatus.set({'palmSize': false});
        } else {
            app.windowStatus.set({'palmSize': true});
        }

        var dir;
        if(vScrollPosition > app.windowStatus.get('vScrollLastPosition')) {
            dir = 'down';
        } else if (vScrollPosition < app.windowStatus.get('vScrollLastPosition')) {
            dir = 'up';
        }

        // send to the model if it has changed from what the model shows:
        if(dir && dir !== app.windowStatus.get('vScrollDirection')) {
            app.windowStatus.set({ vScrollDirection: dir });
        }

        // done checking, so set last scroll position:
        app.windowStatus.set({ vScrollLastPosition: vScrollPosition });
    }

});
