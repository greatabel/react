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
    leapYear: true,
    topics: ['React', 'React Native', 'JavaScript'],
    info: {
      papaerback: true,
      length: '335 pages',
      type: 'programming'
    },
    name: 'Nader Dabit', 
    colors: ['blue']
    }
  }

  updateYear() {
    this.setState({
      year:2021
    })
  }

  update(){
    this.forceUpdate()
  }

  render() {
    let leapYear = <Text>This is not a leapYear! </Text>
    if (this.state.leapYear) {
      leapYear = <Text>This is a leapYear!</Text>
    }
    return (
    <View>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text>My name is: { this.state.name }</Text>
    <Text onPress={()=> this.updateYear()} >The year is: { this.state.year }</Text>
    <Text>My colors are { this.state.colors[0] }</Text> 
    <Text onPress={ ()=> this.update()} >Force Update</Text> 
    <Text></Text>
    <Text></Text>
    <Text>Length: { this.state.info.length }</Text>
    <Text>Type: { this.state.info.type }</Text>
    { leapYear }
    </View>
      ) 
  }
}