'use strict'

var React = require('react-native')

var BookList = require('./BookList');

var {
  StyleSheet,
  NavigatorIOS,
  Component
} = React;

var styles = StyleSheet.create(
{
  cotainer:{ 
 flex:1
  }
});

class Featured extends Component{
  // render(){
  //   return (
  //     <View style={styles.cotainer}>
  //       <Text style={styles.description}>Featured Tab </Text>
  //     </View>
  //     );
  // }
  render(){
    return (
        <NavigatorIOS
        style={styles.cotainer}
        initialRoute={{
          title:'Featured Books',
          component: BookList
        }}         />

        
        
        
      );
  }

}

module.exports = Featured;