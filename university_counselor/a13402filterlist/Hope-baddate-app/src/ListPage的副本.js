/* eslint-disable react-native/no-inline-styles */
/*
  Bad date incidents list
  Include stack navigation for navigation between SearchFiltersPage
*/
import React, {memo, useState, useEffect, useCallback, Component} from 'react';
import {Alert, View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {Header, Modal, Button, Center, NativeBaseProvider} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import SearchFiltersSelections from './SearchFilterSelections';



/*
  Additional incident descriptions modal
*/
export const IncidentModal = ({incidentDate, incidentDetails}) => {
  // Set incident modal visibility
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <View style={styles.resultButtonContainer}>
        {/* react-native pressable */}
        {/* <Pressable onPress={() => setIsVisible(true)}>
          <Text>MORE INFO</Text>
        </Pressable> */}
        {/* native-base button */}
        <Button onPress={() => setIsVisible(true)}>MORE INFO</Button>
      </View>
      {/* react-native modal */}
      {/* <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(false);
        }}>
        <Text>HELLO MODAL</Text>
        <Pressable onPress={() => setIsVisible(false)}>
          <Text>CLOSE MODAL</Text>
        </Pressable>
      </Modal> */}
      {/* native-base modal */}
      <Modal isOpen={isVisible} onClose={() => setIsVisible(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>REPORT TITLE</Modal.Header>
          <Modal.Body>
            Incident Date: {incidentDate}
            Incident Details: {incidentDetails}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={() => {
                setIsVisible(false);
              }}>
              CLOSE
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

/*
  List of incident report results from 2nd database
*/
global.myarray = []

const ResultList = memo(props => {
  // Setting report list obtained from database
  const [reportList, setReportList] = useState([]);

  useEffect(() => {
    Axios.get('http://127.0.0.1:3002/api/get').then(response => {
      global.myarray = response.data;
      setReportList(global.myarray);

    });
  }, []);

  return (
    <>
      {/* Incident reports list */}
      <FlatList
        data={reportList}
        extraData={global.myarray}
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
                  Description of perpetrator: {item.perpetratorDescription}
                </Text>
              </View>
              {/* Modal stuff */}
              <IncidentModal
                incidentDate={item.incidentDate}
                incidentDetails={item.incidentDetails}
              />
            </View>
          </>
        )}
      />
    </>
  );
});


/*
  Exported ListPage function
  - Main incidents list page layout
  - Search filter modal control
  - Stack navigation functions (TO BE REMOVED IF NOT NEEDED)
*/
const ListStack = createStackNavigator();
const ListPage = () => {
  const [shouldShow, setShouldShow] = useState(true);



  // Set search filters modal visibility
  const [isVisible, setIsVisible] = useState(false);

  // Set default or filtered list view
  const [isFiltered, setIsFiltered] = useState(false);

  // Set query data obtained from modal using callback function
  const [cityFilter, setCityFilter] = useState('nothing');
  const cityFilterCallback = useCallback(data => {
    console.log('####city=', data);
    // console.log('@@@global.myarray=', global.myarray);
    global.myarray =  global.myarray.filter(d => d.city.toLowerCase() == data.toLowerCase() );

    console.log('***', global.myarray)
    setShouldShow(!shouldShow)




    setCityFilter(data);
  }, []);

  // Handle filter application process for filter button
  const onFilterApply = () => {
    return setIsVisible(true);
  };

  // Search filters modal
  const SearchFiltersModal = () => {
    return (
      <>
        <Modal isOpen={isVisible} onClose={() => setIsVisible(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>APPLY SEARCH FILTERS</Modal.Header>
            <Modal.Body>
              <SearchFiltersSelections
                cityFilterCallback={cityFilterCallback}
              />
            </Modal.Body>
            <Modal.Footer>
              {/* Button to apply filters */}
              <Button
                onPress={() => {
                  setIsVisible(false);
                  setIsFiltered(true);
                }}>
                APPLY
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  };

  // Conditionally rendered query display
  const QueryDisplay = () => {
    if (isFiltered) {
      return (
        <>
          <Text>QUERY DATA HERE:</Text>
          <Text>City filters: {cityFilter}</Text>
        </>
      );
    } else {
      return <Text>CONDITIONALLY RENDERED QUERY DISPLAY HERE</Text>;
    }
  };

  /*
  Incident reports list page main layout
  */
  const Layout = () => {
    return (
      <>
        <NativeBaseProvider>
          {/* Conditionally rendered query selection */}
          <View style={styles.queryContainer}>
            <QueryDisplay />
          </View>
          {/* Incident report list here */}
          <View style={styles.pageContainer}>
                  {shouldShow ? (
           <ResultList />
        ) : null}
           
          </View>
        </NativeBaseProvider>
      </>
    );
  };

  return (
    <>
      <NativeBaseProvider>
        <ListStack.Navigator>
          <ListStack.Screen
            name="List Page"
            component={Layout}
            options={{
              headerTitle: 'Bad Date Incidents List',
              headerRight: () => (
                <View style={{padding: 5}}>
                  <Button onPress={() => onFilterApply()}>FILTERS</Button>
                </View>
              ),
            }}
          />
        </ListStack.Navigator>
        <SearchFiltersModal />
      </NativeBaseProvider>
    </>
  );
};

export default ListPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 100,
  },
  sectionContainer: {
    margin: 15,
  },
  queryContainer: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 15,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalValueContainer: {
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: 300,
    padding: 30,
    width: 300,
  },
  modalText: {
    textAlign: 'center',
    padding: 5,
  },
});
