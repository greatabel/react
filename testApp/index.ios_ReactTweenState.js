'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} = React;

var tweenState = require('react-tween-state');

var App = React.createClass({
  mixins: [tweenState.Mixin],

  getInitialState() {
    return { opacity: 1 }
  },

  _animateOpacity() {
    this.tweenState('opacity', {
      easing: tweenState.easingTypes.easeOutQuint,
      duration: 1000,
      endValue: this.state.opacity === 0.2 ? 1 : 0.2,
    });
  },

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={this._animateOpacity}>
          <View ref={component => this._box = component}
                style={{width: 200, height: 200, backgroundColor: 'red',
                        opacity: this.getTweeningValue('opacity')}} />
        </TouchableWithoutFeedback>
      </View>
    )
  },
});


AppRegistry.registerComponent('testApp', () => App);

module.exports = App;
