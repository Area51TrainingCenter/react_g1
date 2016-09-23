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
    TouchableHighlight,
    AlertIOS
} from 'react-native';

import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js');


const firebaseConfig = {
      apiKey: "--",
      authDomain: "--",
      databaseURL: "--",
      storageBucket: "--",
      messagingSenderId: "--" 
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
      this.itemsRef = this.getRef().child('items');
    }

    getRef() {
      return firebaseApp.database().ref();
    }

    listenForItems(itemsRef) {

      console.log('Entra????', itemsRef)

      itemsRef.on('value', (snap) => {
        // get children as an array
        var items = [];
        snap.forEach((child) => {
          console.log(child.val().title)
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

          <ActionButton title="Agregar + " onPress={this._addItem.bind(this)} />

        </View>
      )
    }

    _addItem(){
      AlertIOS.prompt(
        'Agreagar ToDo', null,[
          {text: 'Cancelar', onPress: () => console.log('Se cancelo...'), style: 'cancel'},
          {
            text: 'Agregar', onPress: (text) => { this.itemsRef.push({title: text}) }
          }
        ]
      )
    }

    _renderItem(item) {

       const onPress = () => {
          AlertIOS.alert(
            'Completado', null,[
              {text: 'Completar', onPress: (text) => this.itemsRef.child(item._key).remove()},
              {text: 'Cancelar', onPress: (text) => console.log('Se cancelo...')}
            ]
          )
       }

       return (
         <ListItem item={item}  onPress={onPress}/>
       );
     }
}

AppRegistry.registerComponent('myTodoApp', () => myTodoApp);
