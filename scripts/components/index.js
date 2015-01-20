var App = App || {};

(function() {
    'use strict';

    var e = React.createElement;

    var Index = React.createClass({
        render: function() {
            return e('h1', null, 'Index');
        }
    });

    App.Index = Index;
})();
