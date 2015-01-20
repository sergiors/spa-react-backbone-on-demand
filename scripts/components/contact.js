var App = App || {};

(function() {
    'use strict';

    var e = React.createElement;

    var Contact = React.createClass({
        getInitialState: function() {
            return {
                name: null
            };
        },
        
        handleSubmit: function(e) {
            e.preventDefault();
            var name = this.refs.name.getDOMNode();

            if (!name.value) {
                return;
            }
            
            this.setState({name: name.value});
            
            name.value = '';
        },
        
        renderName: function() {
            if (!this.state.name) return;
            
            return 'Your name is ' + this.state.name;
        },
        
        render: function() {
            var yourName = this.renderName();
        
            return (
                e('div', null, 
                    e('h1', null, 'Contact'),
                    e('form', {onSubmit:this.handleSubmit},
                        e('label', null,
                            'Type your name',
                            e('input', {name:'name', 'ref':'name'})
                        ),
                        e('button', {type:'submit'}, 'send')
                    ),
                    yourName
                )
            );
        }
    });

    App.Contact = Contact;
})();
