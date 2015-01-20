var App = App || {};

(function() {
    'use strict';

    var e = React.createElement
      , events = Backbone.Events;

    var Bootstrap = React.createClass({
        getInitialState: function() {
            return {
                shown: App.Index
            }
        },

        componentWillMount: function() {
            events.on('change:component', function(component) {
                this.setState({shown: component});
            }.bind(this));
        },

        componentWillUnmount: function() {
            events.off('change:component');
        },

        render: function() {
            return e(this.state.shown, null);
        }
    });
    
    var mount = document.getElementById('bootstrap');

    new App.Router(function() {
        React.render(e(Bootstrap, null), mount);
        Backbone.history.start();
    });
})();
