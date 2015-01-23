var App = App || {};

(function() {
    'use strict';

    var e = React.createElement
      , events = Backbone.Events;

    var Bootstrap = React.createClass({
        getInitialState: function() {
            return {
                shown: null,
                wait: true
            }
        },

        componentWillMount: function() {
            events.on('change', function(component) {
                this.setState({
                    shown: component,
                    wait: false
                });
            }, this);
            
            events.on('wait', function() {
                this.setState({wait: true});
            }, this);
        },

        componentWillUnmount: function() {
            events.off('change').off('wait');
        },

        render: function() {
            if (this.state.wait) {
                return e('p', null, 'Please, wait...');
            }
            
            return this.state.shown && e(this.state.shown, null);
        }
    });
    
    var mount = document.getElementById('bootstrap');

    new App.Router(function() {
        React.render(e(Bootstrap, null), mount);
        Backbone.history.start();
    });
})();
