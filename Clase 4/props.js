var Caja = React.createClass({
  getDefaultProps: function(){
    return {
      //myColorIndex: -1
    }
  },
  getInitialState: function(){
    return {
      estilo: {
        backgroundColor: "blue",
        height: 200,
        width: 200,
        color: "white",
        textAlign: "center",
      },
      myColorIndex: -1
    }
  },
  actualizar: function(){
    console.log('actualizando')
    console.log(this.props.myColorIndex)
    //this.props.myColorIndex = 0;
    //console.log(ci)
    this.setState(
      { myColorIndex: this.props.myColorIndex + 1 })
    console.log('despues: ', this.props.myColorIndex)
    console.log('despues: ', this.props.colores)
  },
  componentWillReceiveProps: function (sigProp) {
    console.log(sigProp)
    
  },
  render: function () { 
    return (
      <div style={this.state.estilo} onClick={this.actualizar}>Cajita actualizable</div>
    )
  }
});

ReactDOM.render(
  <Caja colores="Red, Peru, Salmon, DarkMagenta" />,
  document.getElementById('main')
);