/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js');


const firebaseConfig = {
      apiKey: "AIzaSyBDMtpbfUgLlusx5CUaEB8dwmXVtuJwyo0",
      authDomain: "mytodoapp-yfx.firebaseapp.com",
      databaseURL: "https://mytodoapp-yfx.firebaseio.com",
      storageBucket: "mytodoapp-yfx.appspot.com",
      messagingSenderId: "91888442793" 
}

const firebaseApp = firebase.initializeApp(firebaseConfig);


class myTodoApp extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        })
      };
      this.itemsRef = firebaseApp.database().ref();
    }

    getRef() {
      return firebaseApp.database().ref();
    }

    listenForItems(itemsRef) {

      console.log('Entra????', itemsRef)

      itemsRef.on('value', (snap) => {
        console.log('??')
        // get children as an array
        var items = [];
        snap.forEach((child) => {
          console.log('??')
          items.push({
            title: child.val().title,
            _key: child.key
          });
        });

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });

      });
    }

    componentDidMount() {
      //console.log('invoca?', this.itemsRef)
      this.listenForItems(this.itemsRef);
    }

    render() {
      return (
        <View style={styles.container}>

          <StatusBar title="Mis pendientes" />

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            enableEmptySections={true}
            style={styles.listview}/>

          <ActionButton title="Agregar + " />

        </View>
      )
    }
    _renderItem(item) {

       

       return (
         <ListItem item={item} onPress={onPress} />
       );
     }
}

AppRegistry.registerComponent('myTodoApp', () => myTodoApp);
