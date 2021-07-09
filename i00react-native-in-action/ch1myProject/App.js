/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import API from './api'

const instructions = Platform.select({ 
  ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu', 
});



export default class App extends Component<{}> {
    constructor () {
    super()
    this.state = { name: 'chris' }
  }
  componentDidMount () {
    API.getName().then((data) => {
      this.setState({ name: data })
    })
  }

  render() {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
        To get started, edit App.js => {this.state.name} </Text>
        <Text style={styles.instructions}> {instructions}
        </Text>
        </View> );
          } 
}

const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'center', 
  alignItems: 'center',
   backgroundColor: 'pink',
  }, 
  welcome: {
  fontSize: 20, 
  textAlign: 'center', 
  margin: 10,
  }, 
  instructions: {
  textAlign: 'center', 
  color: 'green', 
  marginBottom: 5,
  }, 
});




