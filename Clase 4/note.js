var Note = React.createClass({
  getInitialState: function() {
    return {
      editing: false
    }
  },
  componentWillMount: function () { 
    this.style = {
      right: this.myRandom(0, window.innerWidth - 150) + 'px',
      top: this.myRandom(0, window.innerHeight - 150) + 'px',
      transform: 'rotate('+ this.myRandom(-15, 15) +'deg)'
    }
    console.log('componentWillMount');
  },
  myRandom: function (min, max) { 
    return(min + Math.ceil(Math.random() * max))
  },
  edit: function() {
    this.setState({
      editing: true
    });
  },
  save: function() {
    var val = ReactDOM.findDOMNode(this.refs.newText).value;

    this.props.onChange(val, this.props.index);

    console.log('El nuevo texto de nota es: ', val)
      //TODO: Guarda valor de nota
    this.setState({
      editing: false
    });
  },
  remove: function() {
    console.log('Borrando nota...', this.props.index);
    this.props.onRemove(this.props.index)
  },
  renderDisplay: function() {
    return (<div className = "note" style={this.style}>
      <p> {
        this.props.children
      } < /p> <
      span >
      <
      button onClick = {
        this.edit
      }
      className = "btn btn-primary glyphicon glyphicon-pencil" / >
      <
      button onClick = {
        this.remove
      }
      className = "btn btn-danger glyphicon glyphicon-trash" / >
      <
      /span> < /
      div >
    );
  },
  renderForm: function() {
    return ( <
      div className = "note" >
      <textarea ref="newText"
                defaultValue = {this.props.children}
                className = "form-control" >
      </textarea>
      <button onClick = {this.save}
      className = "btn btn-success btn-sm glyphicon glyphicon-floppy-disk" / >
      <
      /div>
    )
  },
  render: function() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }

  }
});

var Board = React.createClass({
  propTypes: {
    count: function(props, propName) {
      if (typeof props[propName] != "number") {
        return new Error('Solo se admiten números');
      }
      if (props[propName] > 100) {
        return new Error('¡Son máximo 100 notas! Estas tratando de agregar ' + props[propName] + ' notas');
      }
    }
  },
  getInitialState: function() {
    return {
      notes: []
    }
              },
    remove: function(i) {
        var arr = this.state.notes;
            arr.splice(i, 1);
              console.log('nuevas notas ', arr, this.state.notes);
              this.setState({notes: arr});
    },
    update: function(newText, i) {
      var arr = this.state.notes;
          arr[i]= newText;
          this.setState({notes: arr});
    },
    nextId: function() {
       this.uniqueId = this.uniqueId || 0; 
       return this.uniqueId++;     
    },
    add: function(text) {
       var arr = this.state.notes;
        arr.push({
                id: this.nextId(),
                message: text
              });
          this.setState({notes: arr});
    },
    eachNote: function(note, i) {
        return(
          <Note key={note.id}
                index={i}
                onChange={this.update}
                onRemove={this.remove}>
                {note.message}
                </Note>
        );    
    },          
  render: function() {
    return <div className = "board" >
          { this.state.notes.map(this.eachNote) }
          <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                onClick={ this.add.bind(null, "Nueva nota...") } />  
        < /div>
  }
})


ReactDOM.render( < Board count = {
      10
    }
    / > , document.getElementById('main'))