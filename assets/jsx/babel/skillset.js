'use strict';

var Skillset = React.createClass({
    displayName: 'Skillset',

    getInitialState: function getInitialState() {
        return {
            skillData: null
        };
    },

    componentDidMount: function componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {

            this.setState({
                skillData: result
            });
        }.bind(this));
    },

    componentWillUnmount: function componentWillUnmount() {
        this.serverRequest.abort();
    },
    render: function render() {
        var self = this;
        if (this.state.skillData == null) {
            return React.createElement(
                'div',
                null,
                'Loading..'
            );
        }
        var skillArray = jsonToArray(this.state.skillData);
        return React.createElement(
            'ul',
            { className: 'skillset' },
            skillArray.map(function (m, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    m
                );
            })
        );
    }
});