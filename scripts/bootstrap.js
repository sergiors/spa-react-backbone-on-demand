var App = App || {};

(function() {
    'use strict';

    var e = React.createElement
      , Index = App.Index;

    var Bootstrap = React.createClass({
        getInitialState: function() {
            return {
                shown: Index
            }
        },

        componentWillMount: function() {
            Backbone.Events.on('change:component', function(component) {
                this.setState({shown: component});
            }.bind(this));
        },

        componentWillUnmount: function() {
            Backbone.Events.off('change:component');
        },

        render: function() {
            return e(this.state.shown, null);
        }
    });

    new App.Router(function(mount) {
        React.render(e(Bootstrap, null), mount);
        Backbone.history.start();
    }.bind(null, document.getElementById('bootstrap')));
})();
