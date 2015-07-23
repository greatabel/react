'use strict';

// var FACK_BOOK_DATA = 
//   [{title:'Learn react native', authors:'appcoda',
//   image:'https:\/\/s.doubanio.com\/f\/shire\/5522dd1f5b742d1e1394a17f44d590646b63871d\/pics\/book-default-medium.gif'} ]

var REQUEST_URL = 'https://api.douban.com/v2/book/search?q=fiction';

var React = require('react-native')

var BookDetail = require('./BookDetail');

var {
  Image,
  StyleSheet,
  Text,
  View,
  Component,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,

} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    seperator:{
      height:1,
      backgroundColor:'#dddddd'
    },
    ListView: {
      backgroundColor: 'gray'
    },
    loading:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center'
    }

});



class BookList extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1,row2) => row1 !== row2
      })
    };
  }

componentDidMount(){
   this.fetchData();
}

fetchData() {

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    // dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                    dataSource: this.state.dataSource.cloneWithRows(responseData.books),
                    isLoading: false
                });
            })
            .done();
    }

// componentDidMount(){
//   var books = FACK_BOOK_DATA;
//   this.setState({
//     dataSource: this.state.dataSource.cloneWithRows(books)
//   });
// }

  // render(){
  //   var book = FACK_BOOK_DATA[0];
  //   return (
  //           <View style={styles.container}>
  //               <Image source={{uri: book.image}}
  //                           style={styles.thumbnail} />
  //               <View style={styles.rightContainer}>
  //                   <Text style={styles.title}>{book.title}</Text>
  //                   <Text style={styles.author}>{book.authors}</Text>
  //               </View>
  //           </View>
  //       );

  // };

  render(){
    if(this.state.isLoading){
      return this.renderLoadingView()
    }

    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderBook.bind(this)}
        state={styles.ListView}      />
      );
  }

  renderLoadingView(){
    return (
      <View style={styles.loading}>
       <ActivityIndicatorIOS size='large' />
       <Text> loading books...
       </Text>
      </View>
      );
  }

  renderBook(book) {
       return (
            <TouchableHighlight 
            onPress={() => this.showBookDetail(book)} underlayColor='blue'            >
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: book.image}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.title}</Text>
                            <Text style={styles.author}>{book.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

   showBookDetail(book){
     this.props.navigator.push({
      title: book.title,
      component: BookDetail,
      passProps: {book}
     });
   }


}

module.exports = BookList;