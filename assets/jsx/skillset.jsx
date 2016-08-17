var Skillset = React.createClass({
    getInitialState: function () {
        return {
            skillData: null
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            this.setState({
                skillData: result
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var self = this;
        if (this.state.skillData == null) {
            return (<div>
                Loading..
            </div>);
        }
        var skillArray = jsonToArray(this.state.skillData);
        return (
            <ul className='skillset'>{ skillArray.map(function (m, index) {
                return <li key={index}>{m}</li>;
            }) }
            </ul>
        );

    }
});


