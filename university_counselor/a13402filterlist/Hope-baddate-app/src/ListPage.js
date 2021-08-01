import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';

const App = () => {
  const [search, setSearch] = useState('');
  const [searchitype, setSearchItype] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3002/api/get')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text, category) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      if (category == 'city') {
        console.log('search by city')
        const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.city
            ? item.city.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
      }
      if(category == 'incident_type') {
        console.log('search by incident_type')
        const newData = filteredDataSource.filter(
        function (item) {
          const itemData = item.incidentType
            ? item.incidentType.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchItype(text);        
      }
      if(category == 'start_date') {
        console.log('search by start_date')
        // 2020-12-30
        let start = new Date(text);
        const newData = masterDataSource.filter(item => {
         let date = new Date(item.dateReported);
         return date >= start;
        });
      setFilteredDataSource(newData);
      // setSearchItype(text);        
      }

      if(category == 'end_date') {
        console.log('search by end_date')

        let end = new Date(text);
        console.log('end=', end)
        const newData = masterDataSource.filter(item => {
         let date = new Date(item.dateReported);
         return date <= end;
        });
      setFilteredDataSource(newData);
      // setSearchItype(text);        
      }


    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
      setSearchItype(text); 
    }

  };




  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' perpetratorDescription : ' + item.perpetratorDescription);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text, 'city')}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Input city:"
        />
  
          <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text, 'incident_type')}
          value={searchitype}
          underlineColorAndroid="transparent"
          placeholder="Input incident_type:"
        />

                  <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text, 'start_date')}
          
          underlineColorAndroid="transparent"
          placeholder="Input start_date:"
        />

                  <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text, 'end_date')}
          
          underlineColorAndroid="transparent"
          placeholder="Input end_date:"
        />
      <FlatList
        data={filteredDataSource}

        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) => (
          <>
            <View style={styles.resultContainer}>
              {/* Main text */}
              <View style={styles.resultTextContainer}>
                <Text>Date Reported: {item.dateReported}</Text>
                <Text>City: {item.city}</Text>
                <Text>Location: {item.location}</Text>
                <Text>Incident Type: {item.incidentType}</Text>
                <Text>
                  Description of perpetrator: {item.perpetratorDescription.substring(0,50)}
                </Text>
                <Text>
                  incidentDate: {item.incidentDate}
                </Text>
                <Text>
                  incidentDetails: {item.incidentDetails.substring(0,100)}
                </Text>
                            
              </View>
              {/* Modal stuff */}
            
            </View>
          </>
        )}
      />


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  resultContainer: {
    backgroundColor: '#d1d1d1',
    margin: 17,
    borderRadius: 10,
    justifyContent: 'center',
    height: 250,
  },
  resultTextContainer: {
    alignItems: 'flex-start',
    padding: 10,
    flex: 3.5,
    height: 200,
  },
  resultButtonContainer: {
    padding: 15,
    flex: 1,
  },
});

export default App;