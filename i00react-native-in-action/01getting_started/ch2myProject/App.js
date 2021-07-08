import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyComponent extends Component<{}> { 
  constructor(){
    super()
    this.state = {
    year: 2016,
    name: 'Nader Dabit', 
    colors: ['blue']
    }
  }


  render() {
    return (
    <View>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text>My name is: { this.state.name }</Text>
    <Text>The year is: { this.state.year }</Text>
    <Text>My colors are { this.state.colors[0] }</Text> 
    </View>
      ) 
  }
}