'use strict';

var Skillset = React.createClass({
    displayName: 'Skillset',

    render: function render() {
        var self = this;
        return React.createElement(
            'ul',
            { className: 'skillset' },
            this.props.items.map(function (m, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    m
                );
            })
        );
    }
});