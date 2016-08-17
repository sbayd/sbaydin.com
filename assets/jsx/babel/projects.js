"use strict";

var Projects = React.createClass({
    displayName: "Projects",

    getInitialState: function getInitialState() {
        return {
            projectData: null
        };
    },

    componentDidMount: function componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {

            this.setState({
                projectData: result
            });
        }.bind(this));
    },

    componentWillUnmount: function componentWillUnmount() {
        this.serverRequest.abort();
    },
    render: function render() {
        var self = this;
        if (this.state.projectData == null) {
            return React.createElement(
                "div",
                null,
                "Loading.."
            );
        }
        var projectArray = $.map(this.state.projectData, function (value, index) {
            return [value];
        });
        return React.createElement(
            "div",
            null,
            projectArray.map(function (m, index) {
                return React.createElement(
                    "div",
                    { key: index },
                    React.createElement(
                        "h5",
                        null,
                        m.Name
                    ),
                    React.createElement("hr", null),
                    React.createElement(ProjectsSub, { items: m.Items })
                );
            })
        );
    }
});

var ProjectsSub = React.createClass({
    displayName: "ProjectsSub",

    render: function render() {

        return React.createElement(
            "div",
            null,
            this.props.items.map(function (m, index) {

                return React.createElement(
                    "div",
                    { className: "item", key: index },
                    React.createElement(
                        "span",
                        { className: "project-title" },
                        React.createElement(
                            "a",
                            { href: m.link, target: "_blank" },
                            m.title
                        )
                    ),
                    "- ",
                    React.createElement(
                        "span",
                        { className: "project-tagline" },
                        m.description
                    )
                );
            })
        );
    }
});