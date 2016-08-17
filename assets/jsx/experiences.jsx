var Experiences = React.createClass({
    getInitialState: function () {
        return {
            experienceData: null
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                experienceData: result
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var self = this;
        if (this.state.experienceData == null) {
            return (<div>
            Loading..
            </div>);
        }
        var experienceArray = $.map(this.state.experienceData, function (value, index) {
            return [value];
        });
        return (
            <div className="item">
                {
                    experienceArray.map(function (m, index) {
                        return <div key={index}>
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">{m.Title}</h3>
                                    <div className="time">{m.Date}</div>
                                </div>
                                <div className="company" dangerouslySetInnerHTML={{__html: m.Address}}>
                                </div>
                            </div>
                            <div className="details">
                                <p dangerouslySetInnerHTML={{__html: m.Description}}></p>
                            </div>
                        </div>
                    })
                }

            </div>

        );
    }
});




