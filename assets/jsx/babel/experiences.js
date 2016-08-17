"use strict";

var Experiences = React.createClass({
    displayName: "Experiences",

    getInitialState: function getInitialState() {
        return {
            experienceData: null
        };
    },

    componentDidMount: function componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                experienceData: result
            });
        }.bind(this));
    },

    componentWillUnmount: function componentWillUnmount() {
        this.serverRequest.abort();
    },
    render: function render() {
        var self = this;
        if (this.state.experienceData == null) {
            return React.createElement(
                "div",
                null,
                "Loading.."
            );
        }
        var experienceArray = $.map(this.state.experienceData, function (value, index) {
            return [value];
        });
        return React.createElement(
            "div",
            { className: "item" },
            experienceArray.map(function (m, index) {
                return React.createElement(
                    "div",
                    { key: index },
                    React.createElement(
                        "div",
                        { className: "meta" },
                        React.createElement(
                            "div",
                            { className: "upper-row" },
                            React.createElement(
                                "h3",
                                { className: "job-title" },
                                m.Title
                            ),
                            React.createElement(
                                "div",
                                { className: "time" },
                                m.Date
                            )
                        ),
                        React.createElement("div", { className: "company", dangerouslySetInnerHTML: { __html: m.Address } })
                    ),
                    React.createElement(
                        "div",
                        { className: "details" },
                        React.createElement("p", { dangerouslySetInnerHTML: { __html: m.Description } })
                    )
                );
            })
        );
    }
});