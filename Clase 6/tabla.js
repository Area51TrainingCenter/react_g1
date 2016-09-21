var Tabla = React.createClass({
  propTypes: {
    cabeceras: React.PropTypes.arrayOf(
      React.PropTypes.string
    ),
    datosBase: React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.string
      )
    )
  },
  getInitialState: function() {
    return {
      platillos: this.props.datosBase
    };
  },
  _sort: function(e) {
    var column = e.target.cellIndex;
    var data = this.state.platillos.slice();

    data.sort(function(a, b) {
      return a[column] > b[column] ? 1 : -1;
    });

    this.setState({
      platillos: data
    });
  },
  render: function() {
    return (
      React.DOM.table(null,
        React.DOM.thead({
            onClick: this._sort
          },
          React.DOM.tr(null,
            this.props.cabeceras.map(function(titulo, idx) {
              return React.DOM.th({
                key: idx
              }, titulo);
            })
          )
        ),
        React.DOM.tbody(null,
          this.state.platillos.map(function(row, idx) {
            return (
              React.DOM.tr({
                  key: idx
                },
                row.map(function(cell, idx) {
                  return React.DOM.td({
                    key: idx
                  }, cell);
                })
              )
            );
          })
        )
      )
    );
  }
});

/**
 * @param {tipo} - Desayuno, comida o cena.
 * @param {categoria} - Criollo, marino, al paso o mediterraneo.
 */
var cabeceras = ['Nombre', 'País', 'Tipo', 'Precio', 'Categoría'];
var platillos = [
  ['Ceviche', 'Perú', 'comida', 'S/.20', 'marino'],
  ['Tacos', 'México', 'cena', '$5.00 MXN', 'al paso'],
  ['Huevos Benedictinos', 'Holanda', 'desayuno', '$5 USD', 'mediterraneo']
];

ReactDOM.render(React.createElement(
  Tabla, {
    cabeceras: cabeceras,
    datosBase: platillos
  }
), document.getElementById('main'));