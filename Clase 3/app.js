var HolaMundo = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Ahora con JSX</h1>
        <i>Happy coding { this.props.name } { this.props.lastName } ! </i>
        <u>{ this.props.children }</u>
      </div>
    )
  }
})

ReactDOM.render(<div>
                  <HolaMundo name="Sergio" lastName="Brito" />
                  <HolaMundo name="Scarlett">
                      ¡Ella es hermosa!
                  </HolaMundo>
                  <HolaMundo name="Black Widow"/>
                </div>
                , document.getElementById('main'))
