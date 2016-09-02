var HolaMundo = React.createClass({
    displayName: "HolaMundo",
    render: function() {
        return (
            React.createElement('div', null,
                React.createElement('h1', null, 'Aprendiendo React'),
                React.createElement('p', null, 'en Area 51'),
                React.createElement('p', null, '=D Alumno: '+ this.props.name),
                React.createElement('hr', null)
            )
        )
    }
})
//this.props.name
ReactDOM.render(
    React.createElement(HolaMundo, {name: 'yacaFx'}),
    document.getElementById('main')
)
