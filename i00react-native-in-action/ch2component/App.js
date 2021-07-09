// import { StatusBar } from 'expo-status-bar';
// import React, {Component}  from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import React, { Component } from 'react';  
import { AppRegistry,View,Text } from 'react-native';  

export default class App extends Component {  

constructor(props) {  
super(props);  
this.state = {  
name: "React"  
}  
}  

//组件即将加载  
componentWillMount() {  
console.log("componentWillMount");  
}  

//开始组件渲染  
render() {  
console.log("render");  
return (  
  <View>
  <Text></Text>  
  <Text></Text>  
  <Text></Text>  
  <Text>  
  {this.state.name}  
  </Text>  
  </View>  
);  
}  

//组件加载完毕后  
componentDidMount() {  
console.log("componentDidMount");  
}  

//组件接收到新的 props  
componentWillReceiveProps(nextProps) {  
console.log("componentWillReceiveProps");  
}  

//逻辑控制是否需要更新组件  
shouldComponentUpdate(nextProps, nextState) {  
console.log("shouldComponentUpdate");  
}  

//组件即将更新重新渲染  
componentWillUpdate(nextProps, nextState) {  
console.log("componentWillUpdate");  
}  

//组件重新渲染后  
componentDidUpdate(prevProps, prevState) {  
console.log("componentDidUpdate");  
}  

//组件卸载注销前  
componentWillUnmount() {  
console.log("componentWillUnmount");  
}  
}  