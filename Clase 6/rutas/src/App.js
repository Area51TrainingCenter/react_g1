import React, {
  Component
} from 'react';
import {
  Router,
  Route,
  Link,
  browserHistory
} from 'react-router';
import logo from './logo.svg';
import './App.css';

const Inicio = () => < div > < h1 > Página de Inicio < /h1><Links / > < /div>;
const AcercaDe = () => < div > < h1 > Acerca de... < /h1><Links / > < /div>;
const Contacto = () => < div > < h1 > Contacto < /h1><Links / > < /div>;
const Links = () =>
  <
  nav >
  <
  Link to = "/" > Inicio < /Link> <
  Link to = "acercade" > Acerca de < /Link> <
  Link to = "contacto" > Contacto < /Link> <
  /nav>;


class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      div className = "App-header" >
      <
      img src = {
        logo
      }
      className = "App-logo"
      alt = "logo" / >
      <
      h2 > Welcome to React < /h2> <
      /div>

      <
      Router history = {
        browserHistory
      } >
      <
      Route path = "/"
      component = {
        Inicio
      } > < /Route> <
      Route path = "/acercade"
      component = {
        AcercaDe
      } > < /Route> <
      Route path = "/contacto"
      component = {
        Contacto
      } > < /Route> <
      /Router> <
      /div>
    );
  }
}

export default App;