/**
 * Sample React Native App
 * http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript
 */
'use strict';

var React = require('react-native');

var SearchPage = require('./SearchPage')


var styles = React.StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },

});



class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          // component: HelloWorld,
          component: SearchPage
        }}/>
    );
  }
}
class HelloWorld extends React.Component {
  render() {
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
  }
}

React.AppRegistry.registerComponent('PropertyFinder',
  function() { return PropertyFinderApp });
// AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
