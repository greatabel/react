import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


// class BookDisplay extends Component {
//   render() {
//     const {book, updateBook} = this.props
//     return (
//       <View>
//       <Text></Text>
//       <Text></Text>
//       <Text></Text>
//       <Text> { book }</Text>
//       <Text onPress={ updateBook }> press-me </Text>

//       </View>
//           )
//     }
// }

// export default class MyComponent extends Component<{}> { 
//   constructor(){
//     super()
//     this.state = {
//       book: 'test state!'
//     }
//   //   this.state = {
//   //   year: 2016,
//   //   leapYear: true,
//   //   topics: ['React', 'React Native', 'JavaScript'],
//   //   info: {
//   //     papaerback: true,
//   //     length: '335 pages',
//   //     type: 'programming'
//   //   },
//   //   name: 'Nader Dabit', 
//   //   colors: ['blue']
//   //   }
//   }

//   updateBook() {
//     this.setState({
//       book: 'python in action!'
//     })
//   }

//   // updateYear() {
//   //   this.setState({
//   //     year:2021
//   //   })
//   // }

//   // update(){
//   //   this.forceUpdate()
//   // }

//   render() {
//   //   let leapYear = <Text>This is not a leapYear! </Text>
//   //   if (this.state.leapYear) {
//   //     leapYear = <Text>This is a leapYear!</Text>
//   //   }

//     // return (
//     // <View>
//     // <Text></Text>
//     // <Text></Text>
//     // <Text></Text>
//     // <Text></Text>
//     // <Text>My name is: { this.state.name }</Text>
//     // <Text onPress={()=> this.updateYear()} >The year is: { this.state.year }</Text>
//     // <Text>My colors are { this.state.colors[0] }</Text> 
//     // <Text onPress={ ()=> this.update()} >Force Update</Text> 
//     // <Text></Text>
//     // <Text></Text>
//     // <Text>Length: { this.state.info.length }</Text>
//     // <Text>Type: { this.state.info.type }</Text>
//     // { leapYear }
//     // <Text></Text>
//     // <Text></Text>
//     // </View>
//     //   ) 
//     const { book } = this.state
//     // let book = '"React Native in Action!!'

//     return (
//       <BookDisplay
//       updateBook={ () => this.updateBook() }
//        book={book} />

//       // <BookDisplay book={"React Native in Action"} />
//       // <BookDisplay book={"React Native in Action"} />
//       )

//   }
// }

const  BookDisplay = (props) => {
  let leapyear
  let { topics } = props
  const { info } = props
  topics = topics.map((topic, i) => {
      return <Text key={ topic }>{ topic }</Text>
      })
  if (props.leapYear) {
  leapyear = <Text>This is a leapyear!</Text> 
  
  }
  // return 
  //     (
  //     <View>
  //     { leapyear }
  //     <Text>Book type: { info.type }</Text>
  //     { topics }
  //     </View> 
  //     )

    return (
      <View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>{ leapyear }</Text>
      <Text>Book type: { info.type }</Text>
      
      <Text></Text>
      <Text></Text>
      <Text> test</Text>
      <Text > press-me </Text>
      { topics }
       </View>
       )
}

export default class MyComponent extends  Component<{}> {
  constructor() {
  super() 
  this.state = {
  leapYear: true, 
  info: {
          type: 'programming'
        }
    } 
  }
  render() {
    return (
    <BookDisplay
    leapYear={ this.state.leapYear }
    info={ this.state.info }
    topics={['#React', '#React Native', '#JavaScript']} />
    ) 
  }
}


