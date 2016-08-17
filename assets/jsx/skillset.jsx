var Skillset = React.createClass({
    render: function () {
        var self = this;
        return (
            <ul className='skillset'>{ this.props.items.map(function (m, index) {
                return <li key={index}>{m}</li>;
            }) }
            </ul>
        );

    }
});


