/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js');

class myTodoApp extends Component {
  constructor(props) {
    super(props);

    componentDidMount() {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([
            { title: 'Pizza' }])
        })
      }

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  _renderItem(item) {
    return (
      <ListItem item="{item}" onpress="{()" ==""> {}} />
    );
  }

  render() {
    return (
      <View style="{styles.container}">

        <StatusBar title="Mis pendientes">

        <ListView datasource="{this.state.dataSource}" 
        renderRow="{this._renderItem.bind(this)}" 
        style="{styles.listview}/">

        <ActionButton title="Add" onpress="{()" ==""> {}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myTodoApp', () => myTodoApp);
