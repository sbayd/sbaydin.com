var Projects = React.createClass({
    getInitialState: function () {
        return {
            projectData: null
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            this.setState({
                projectData: result
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var self = this;
        if (this.state.projectData == null) {
            return (<div>
                Loading..
            </div>);
        }
        var projectArray = jsonToArray(this.state.projectData);
        return (
            <div>
                {
                    projectArray.map(function (m, index) {
                        return <div key={index}>
                            <h5>{m.Name}</h5>
                            <hr />
                            <ProjectsSub items={m.Items}/>
                        </div>
                    })
                }

            </div>

        );
    }
});

var ProjectsSub = React.createClass({
    render: function () {

        return (
            <div>
                {
                    this.props.items.map(function (m, index) {

                        return <div className="item" key={index}>
                            <span className="project-title"><a href={m.link} target="_blank">{m.title}</a></span>
                            - <span className="project-tagline">
                                    {m.description}
                            </span>
                        </div>
                    })
                }

            </div>
        );
    }
});

