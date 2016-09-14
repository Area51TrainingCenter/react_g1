var loggerMixin = {
  _log: function(metodo, args) {
    console.log(this.nombre, '::', metodo, args);
  },
  componentWillMount: function() {
    this._log('Evento: componentWillMount', arguments);
    //debugger;
  },
  componentDidMount: function() {
    this._log('Evento: componentDidMount', arguments);
    //debugger;
  },
  componentWillUpdate: function() {
    this._log('Evento: componentWillUpdate', arguments);
    //debugger;
  },
  // componentDidUpdate: function(oldProps, oldState) {
  //   this._log('Evento: componentDidUpdate', arguments);
  //   if (this.state.texto.length > 3) {
  //     console.log('texto largo!')
  //     this.replaceState(oldState);
  //   }
  //   //debugger;
  // },
  componentDidUpdate: function() {
    this._log('Evento: componentDidUpdate', arguments);
    //debugger;
  },
  componentWillUnmount: function() {
    this._log('Evento: componentWillUnmount', arguments);
    //debugger;
  }
};

var Contador = React.createClass({
  nombre: 'miContador',
  mixins: [loggerMixin],
  propTypes: {
    contador: React.PropTypes.number.isRequired
  },
  render: function() {
    return React.DOM.span(null, this.props.contador);
  }
});

var CuadroDeTexto = React.createClass({
  nombre: 'miCuadroDeTexto',
  mixins: [loggerMixin],
  propTypes: {
    dato: React.PropTypes.string,
  },
  getInitialState: function() {
    return {
      texto: this.props.dato
    };
  },
  _textChange: function(e) {
    console.log('cambio de texto... ->  ', e.target.value);
    this.setState({
      texto: e.target.value
    });
  },
  _desmontar: function() {
    ReactDOM.unmountComponentAtNode(document.getElementById('main'));
  },
  render: function() {
    var contador = null;
    if (this.state.texto.length > 0) {
      contador = React.DOM.h3(null,
        React.createElement(Contador, {
          contador: this.state.texto.length
        })
      );
    }
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.texto,
        onChange: this._textChange
      }),
      // React.DOM.h3(null, this.state.texto.length),
      contador,
      React.DOM.button({
        onClick: this._desmontar
      }, 'Desmontame =D')
    );
  }
});

ReactDOM.render(React.createElement(
  CuadroDeTexto, {
    dato: 'Escribe aquí...'
  }
), document.getElementById('main'));