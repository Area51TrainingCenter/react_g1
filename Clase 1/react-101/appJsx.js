var HolaMundo = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Ahora con JSX</h1>
        <i>Happy coding!</i>
      </div>
    )
  }
})

ReactDOM.render(<HolaMundo />, document.getElementById('main'))
