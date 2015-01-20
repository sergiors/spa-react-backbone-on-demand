var App = App || {};

(function() {
    'use strict';

    var e = React.createElement;

    var About = React.createClass({
        render: function() {
            return (
                e('div', null,
                    e('h1', null, 'About'),
                    e('ul', null,
                        e('li', null, 'Github'),
                        e('li', null, 'Facebook'),
                        e('li', null, 'Twitter'),
                        e('li', null, 'Linkedin')
                    )
                )
            );
        }
    });

    App.About = About;
})();
