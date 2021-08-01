/*
    Modal for search filter selections
*/
import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, View, Text, StyleSheet, Alert} from 'react-native';
import {
  NativeBaseProvider,
  Stack,
  HStack,
  VStack,
  Checkbox,
  Select,
  CheckIcon,
  Button,
} from 'native-base';

/*
  Input elements in search filters modal
*/
// City select options
const CitySelect = ({cityFilterCallback}) => {
  // Set values based on selected city options
  const [cityValue, setCityValue] = useState('');
  // Callback to return city value back to list page
  const sendCityFilterValue = value => {
    return cityFilterCallback(value);
  };

  return (
    <>
      <Text>City:</Text>
      <Select
        selectedValue={cityValue}
        minWidth={250}
        accessibilityLabel="Select a city"
        placeholder="Select a city"
        onValueChange={itemValue => {
          setCityValue(itemValue);
          sendCityFilterValue(itemValue);
        }}
        _selectedItem={{
          bg: 'cyan.600',
          endIcon: <CheckIcon size={4} />,
        }}>
        <Select.Item label="Kelowna" value="kelowna" />
        <Select.Item label="West Kelowna" value="west kelowna" />
        <Select.Item label="Vernon" value="vernon" />
        <Select.Item label="Penticton" value="penticton" />
        <Select.Item label="Salmon Arm" value="salmon arm" />
      </Select>
      {/* FOR CHECKING SELECT FUNCTIONALITY -- TO BE REMOVED */}
      {/* <View style={styles.sectionContainer}>
        <Text style={styles.sectionContainer}>CITY QUERY SELECTION HERE:</Text>
        <Text>{cityValue}</Text>
      </View> */}
    </>
  );
};
// Incident type options
const IncidentTypeSelect = ({incidentTypeFilterCallback}) => {
  // Set values based on selected incident type options
  const [incidentTypeValues, setIncidentTypeValues] = useState([
    'harassment',
    'kidnapping',
    'theft',
    'refusal to pay',
    'rape',
    'assault',
  ]);

  // Obtain results based on changes in incidentTypeValues
  const getSelectedIncidentGroupValue = () => {
    if (incidentTypeValues.length === 0) {
      return '[]';
    }
    let arrayString = incidentTypeValues.reduce(
      (accumulator, currentValue) => accumulator + ',' + currentValue,
    );
    return '[' + arrayString + ']';
  };

  return (
    <>
      <Text>Incident Type:</Text>
      <Checkbox.Group
        name="Incident Type Options"
        aria-label="Incident Type Options"
        defaultValue={incidentTypeValues}
        onChange={values => {
          setIncidentTypeValues(values || []);
        }}>
        <Checkbox
          value="harassment"
          aria-label="harassment"
          style={styles.sectionElement}>
          Harassment
        </Checkbox>
        <Checkbox
          value="kidnapping"
          aria-label="kidnapping"
          style={styles.sectionElement}>
          Kidnapping
        </Checkbox>
        <Checkbox
          value="theft"
          aria-label="theft"
          style={styles.sectionElement}>
          Theft
        </Checkbox>
        <Checkbox
          value="refusal to pay"
          aria-label="refusal to pay"
          style={styles.sectionElement}>
          Refusal to pay
        </Checkbox>
        <Checkbox value="rape" aria-label="rape" style={styles.sectionElement}>
          Rape
        </Checkbox>
        <Checkbox
          value="assault"
          aria-label="assault"
          style={styles.sectionElement}>
          Assault
        </Checkbox>
      </Checkbox.Group>
      {/* FOR CHECKING CHECKBOX FUNCTIONALITY -- TO BE REMOVED */}
      {/* <View style={styles.sectionContainer}>
        <Text style={styles.sectionContainer}>
          INCIDENT QUERY SELECTIONS HERE:
        </Text>
        <Text>{getSelectedIncidentGroupValue()}</Text>
      </View> */}
    </>
  );
};

/*
  Filter selections for export
  Query data compiled here
*/
const SearchFilterSelections = ({cityFilterCallback}) => {
  return (
    <>
      <CitySelect cityFilterCallback={cityFilterCallback} />
      <IncidentTypeSelect />
      <Text>DATE FROM SELECTION</Text>
      <Text>DATE TO SELECTION</Text>
    </>
  );
};

export default SearchFilterSelections;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    margin: 20,
  },
  sectionContainer: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '600',
    padding: 5,
  },
  sectionElement: {
    padding: 4,
  },
});
