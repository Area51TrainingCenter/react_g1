var Caja = React.createClass({
  getDefaultProps: function(){
    return {
      colorIndex: -1
    }
  },
  getInitialState: function(){
    return {
      backgroundColor: "blue",
      height: 200,
      width: 200,
      color: "white",
      textAlign: "center"
    }
  },
  actualizar: function(){
    console.log('actualizando')
  },
  componentWillReceiveProps: function (sigProp) {
    console.log(sigProp)
  },
  render: function () { 
    return (
      <div style={this.state} onClick={this.actualizar}>Cajita actualizable</div>
    )
  }
});

ReactDOM.render(
  <Caja colores="Red, Peru, Salmon, DarkMagenta" />,
  document.getElementById('main')
);