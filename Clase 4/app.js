var EstadosDelApp = React.createClass({
  getDefaultProps: function () { 
    return { 
      backgroundColor: "Turquoise",
      height: 150,
      width: 150
    }
  },
  componentWillMount: function () { 
    console.log('El componente esta a punto de montarse');
  },
  componentDidMount: function () { 
    console.log('El componente se ha montado')
  },
  render: function(){
    return(
      <div>
        <div style={ this.props }>
          
        </div>
        <section style={this.props}></section>
      </div>
    )
  }
})

ReactDOM.render(
  <EstadosDelApp />,
  document.getElementById('main')
);

var elComponente = document.getElementsByTagName('div')[0];

elComponente.onclick = function () { 
  ReactDOM.unmountComponentAtNode(document.body);
  console.log('Componente eliminado');
} 
