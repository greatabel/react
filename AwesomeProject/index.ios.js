/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

console.log('abeltest','#'*10);


var AwesomeProject = React.createClass({


  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={stylesA.base} >test style
        </Text>
        <Text style={[stylesA.base,stylesA.background]} >test style2
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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

var stylesA = StyleSheet.create(
{
  base:{
    width:38,
    height:38,
  },
  background:{
    backgroundColor: 'red',
  },
  active:{
    borderWidth:2,
    borderColor:'#00ff00',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
