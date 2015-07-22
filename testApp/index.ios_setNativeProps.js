'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} = React;
  
var styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  }
});

var MyButton = React.createClass({
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },

  render() {
    return (
      <View ref={component => this._root = component} {...this.props} style={styles.button}>
        <Text>{this.props.label}</Text>
      </View>
    )
  },
});
  
var App = React.createClass({
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <TouchableOpacity>
          <MyButton label="Press me!" />
        </TouchableOpacity>
      </View>
    )
  },
});

AppRegistry.registerComponent('testApp', () => App);
module.exports = App;