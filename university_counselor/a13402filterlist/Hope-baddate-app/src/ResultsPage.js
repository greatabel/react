/* eslint-disable react-native/no-inline-styles */
/*
  Results page for search filters
  Include stack navigation for navigation between SearchFiltersPage
*/
import React, {useState, useEffect} from 'react';
import {Modal, View, FlatList, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TabActions} from '@react-navigation/native';

// Page imports
import ListPage from './ListPage';

/*
  Modal for additional incident descriptions
*/
export const IncidentModal = ({incidentId, incidentDetails}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <View style={styles.resultsButtonContainer}>
        <Button
          onPress={() => setIsVisible(true)}
          title={'More Info'}
          color="#1f1fff"
          accessibilityLabel="Find more information about this incident"
        />
      </View>
      <View styles={styles.modalContainer}>
        <Modal
          onRequestClose={() => setIsVisible(false)}
          transparent
          visible={isVisible}>
          <View style={styles.modalValueContainer}>
            <Text style={styles.modalText}>Report No.: {incidentId}</Text>
            <Text styles={styles.modalText}>
              Incident details: {incidentDetails}
            </Text>
            <View style={{padding: 5}}>
              <Button onPress={() => setIsVisible(false)} title={'Close'} />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

/*
  Layout for bad date incidents search results page (ie. list of query results)
  - Navigation variable for use for potential navigation needs
*/
const Layout = ({props, navigation}) => {
  //   const {navigation} = props;

  /*
  Data variable containing all processed bad date reports
  Hard-coded at the moment (to be replaced by query results retrieved by database)
  */
  const data = {
    results: [
      {
        id: 1,
        dateReported: '01-01-2021',
        incidentDate: '31-12-2020',
        city: 'Kelowna',
        incidentType: 'Kidnapping',
        perpetratorDescription:
          'Caucasion man, late 30’s/early 40’s. Stalky with a shaved head.',
        vehicleDescription: 'Red SUV, older jeep Cherokee.',
        incidentDetails:
          'Man asked female for help finding drugs. She got in the vehicle. Instead of driving around the block he got on the highway and proceeded to drive to Winfield. She pulled a knife and he let her out and went inside a gas station.',
      },
      {
        id: 2,
        dateReported: '27-02-2021',
        incidentDate: 'Week of 23-02-2021',
        city: 'Kelowna',
        incidentType: 'Harassment',
        perpetratorDescription:
          'Caucasion man, approx. 50 yrs old. Aprox. 5’10”. Light reddish hair, short with facial hair.',
        vehicleDescription: 'Black truck, Chevy. Clean on the outside.',
        incidentDetails:
          'Man tried to pick up a non female sex worker in a downtown alley and continued to harasse her until she threatened him to leave her alone.',
      },
      {
        id: 3,
        dateReported: '',
        incidentDate: '11-11-2020',
        city: 'Kelowna',
        incidentType: 'Harassment',
        perpetratorDescription: '',
        vehicleDescription: '',
        incidentDetails:
          'Dave, 36, white, skinny. Possessive, very jealous and gets attached. Be careful.',
      },
      {
        id: 4,
        dateReported: '',
        incidentDate: '2020-11-11',
        city: 'Kelowna',
        incidentType: 'Theft',
        perpetratorDescription: '',
        vehicleDescription: '',
        incidentDetails:
          'Sex worker was approached by a man on foot who took her money.',
      },
    ],
  };

  const {results} = data;

  // Back to list function
  function BackToList() {
    // const jumpToAction = TabActions.jumpTo('List Page');
    // return navigation.dispatch(jumpToAction);
    navigation.navigate('List Page');
  }

  return (
    <>
      <View style={styles.pageContainer}>
        {/* Query results shown here */}
        <View style={styles.queryContainer}>
          <Text>QUERY HERE</Text>
          <Button
            onPress={() => {
              BackToList();
            }}
            title="Back to List Page"
          />
        </View>
        <View style={{flex: 3}}>
          <FlatList
            data={results}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => (
              <View style={styles.resultContainer}>
                <View style={styles.resultTextContainer}>
                  <Text>Date Reported: {item.dateReported}</Text>
                  <Text>City: {item.city}</Text>
                  <Text>Location: {item.location}</Text>
                  <Text>Incident Type: {item.incidentType}</Text>
                  <Text>
                    Description of Perpetrator: {item.perpetratorDescription}
                  </Text>
                </View>
                <View style={styles.resultButtonContainer}>
                  <IncidentModal
                    incidentId={`${index}`}
                    incidentDate={item.incidentDate}
                    incidentDetails={item.incidentDetails}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};
/*
  Defines stack navigation for bad date incidents search results page
  For navigating to back to default list page
  Screens include:
  1. Results page
  2. List page
*/
const ResultsStack = createStackNavigator();

const ResultsPage = ({navigation}) => {
  return (
    <>
      <ResultsStack.Navigator>
        <ResultsStack.Screen
          name="Results Page"
          component={Layout}
          options={() => ({
            headerTitle: 'Search Results',
          })}
        />
        <ResultsStack.Screen
          name="List Page"
          component={ListPage}
          options={{
            headerShown: false,
          }}
        />
      </ResultsStack.Navigator>
    </>
  );
};

export default ResultsPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 95,
  },
  resultContainer: {
    backgroundColor: '#d1d1d1',
    margin: 17,
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    height: 250,
  },
  resultTextContainer: {
    alignItems: 'flex-start',
    padding: 10,
    flex: 4,
  },
  resultsButtonContainer: {
    padding: 15,
  },
  modalContainer: {
    justifyContent: 'space-around',
  },
  modalValueContainer: {
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: 300,
    width: 300,
    padding: 30,
  },
  modalText: {
    textAlign: 'center',
    padding: 5,
  },
  queryContainer: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
    margin: 15,
  },
});
