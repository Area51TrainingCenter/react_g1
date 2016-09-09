var CounterParent = React.createClass({
  getDefaultProps: function(){
    console.log("getDefaultProps: Default prop time!");
    return {};
  },
  getInitialState: function() {
    console.log("getInitialState: Default state time!");
    return {
      count: 0
    };
  },
  increase: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  componentWillUpdate: function(newProps, newState) {
      console.log("componentWillUpdate: Component is about to update!");
  },
  componentDidUpdate: function(currentProps, currentState) {
      console.log("componentDidUpdate: Component just updated!");
  },
  componentWillMount: function() {
      console.log("componentWillMount: Component is about to mount!");
  },
  componentDidMount: function() {
      console.log("componentDidMount: Component just mounted!");
  },
  componentWillUnmount: function() {
      console.log("componentWillUnmount: Component is about to be removed from the DOM!");
  },
  shouldComponentUpdate: function(newProps, newState) {
    console.log("shouldComponentUpdate: Should component update?");
 
    if (newState.count < 5) {
      console.log("shouldComponentUpdate: Component should update!");
      return true;
    } else {
      ReactDOM.unmountComponentAtNode(destination);
      console.log("shouldComponentUpdate: Component should not update!");
      return false;
    }
  },
  componentWillReceiveProps: function(newProps){
    console.log("componentWillReceiveProps: Component will get new props!");
  },
  render: function() {
      var backgroundStyle = {
        padding: 50,
        border: "#333 2px dotted",
        width: 250,
        height: 100,
        borderRadius: 10,
        textAlign: "center"
      };
 
      return (
        <div style={backgroundStyle}>
          
          <button onClick={this.increase}>
            +
          </button>
        </div>
      );
    }
});
ReactDOM.render(
  <CounterParent nuevo="nada" colores="Red, Peru, Salmon, DarkMagenta" />,
  document.getElementById('main')
);