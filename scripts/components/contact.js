var App = App || {};

(function() {
    'use strict';

    var e = React.createElement;

    var Contact = React.createClass({
        getInitialState: function() {
            return {
                name: null
            }
        },
        
        handleSubmit: function(e) {
            e.preventDefault();
            var name = this.refs.name.getDOMNode();

            if (!name.value) return null;
            
            this.setState({name: name.value});
            
            name.value = '';
        },
        
        getName: function() {
            return this.state.name && 'Your name is ' + this.state.name;
        },
        
        render: function() {
            var name = this.getName();
        
            return (
                e('div', null, 
                    e('h1', null, 'Contact'),
                    e('form', {onSubmit: this.handleSubmit},
                        e('label', null,
                            'Type your name',
                            e('input', {name:'name', 'ref':'name'})
                        ),
                        e('button', {type:'submit'}, 'send')
                    ),
                    name
                )
            );
        }
    });

    App.Contact = Contact;
})();
