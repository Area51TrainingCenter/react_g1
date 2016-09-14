var Tabla = React.createClass({
  render: function() {
    return (
      React.DOM.table(null,
        React.DOM.thead(null,
          React.DOM.tr(null,
            this.props.cabeceras.map(function(titulo, idx) {
              return React.DOM.th({
                key: idx
              }, titulo);
            })
          )
        )
        //Desde aqui...
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