'use strict'

var React = require('react-native')

var {
  StyleSheet,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create(
 {
    description:{
      fontSize: 20,
      backgroundColor: 'white'
    },
    cotainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    }
 }
  );

class Featured extends Component{
  render(){
    return (
      <View style={styles.cotainer}>
        <Text style={styles.description}>Featured Tab </Text>
      </View>
      );
  }

}

module.exports = Featured;