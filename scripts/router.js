var App = App || {};

(function() {
    'use strict';
    
    var events = Backbone.Events;

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'about': 'about',
            'contact': 'contact'
        },

        initialize: function(callback) { // keep an eye on callback
            callback(this);
        },
        
        execute: function(callback, args, name) {
            $script('scripts/components/' + name + '.js', function() {
                if (callback) callback.apply(this, args);
            });
        },

        index: function() {
           events.trigger('change:component', App.Index);
        },

        about: function() {
            events.trigger('change:component', App.About);
        },

        contact: function() {
            events.trigger('change:component', App.Contact);
        }
    });


    App.Router = Router;
})();
