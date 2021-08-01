/*
  Admin page
  Includes stack navigation for potential navigation needs
*/
import * as React from 'react';
import {
  VStack,
  HStack,
  Input,
  Button,
  FormControl,
  NativeBaseProvider,
} from 'native-base';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Formik} from 'formik';
import Axios from 'axios';

function AddReport() {
  /*Takes data submitted and outputs it into the console log */
  const onSubmit = (data, {resetForm}) => {
    console.log('submiting with ', data);
    Axios.post('http://localhost:3002/api/add', data);
    resetForm({data: ''});
  };
  return (
    /*
    Field names.
    Default values displayed in console log if any of the fields are empty */
    <Formik
      initialValues={{
        ryear: '',
        rmonth: '',
        rday: '',
        pyear: '',
        pmonth: '',
        pday: '',
        city: '',
        location: '',
        incidentType: '',
        perpetratorDesc: '',
        vehicleDesc: '',
        incident: '',
      }}
      /*Actions that take place onSubmit */
      onSubmit={onSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
        <ScrollView>
          <VStack space={3} mx={6} my={5}>
            {/*Basic Input field structure for Date Reported*/}
            <FormControl>
              <FormControl.Label>Date Reported</FormControl.Label>
              <HStack space={3}>
                {/*day input*/}
                <Input
                  onBlur={handleBlur('rday')}
                  onChangeText={handleChange('rday')}
                  value={values.rday}
                  w="25%"
                />
                {/*month input*/}
                <Input
                  onBlur={handleBlur('rmonth')}
                  onChangeText={handleChange('rmonth')}
                  value={values.rmonth}
                  w="25%"
                />
                {/*year input*/}
                <Input
                  onBlur={handleBlur('ryear')}
                  onChangeText={handleChange('ryear')}
                  value={values.ryear}
                  w="50%"
                />
              </HStack>
              <HStack>
                {/*Captions*/}
                <FormControl.HelperText w="30%">MM</FormControl.HelperText>
                <FormControl.HelperText w="30%">DD</FormControl.HelperText>
                <FormControl.HelperText>YYYY</FormControl.HelperText>
              </HStack>
            </FormControl>
            {/*Basic Input field structure for Date of Incident*/}
            <FormControl>
              <FormControl.Label>Date of Incident</FormControl.Label>
              <HStack space={3}>
                {/*day input*/}
                <Input
                  onBlur={handleBlur('pday')}
                  onChangeText={handleChange('pday')}
                  value={values.pday}
                  w="25%"
                />
                {/*month input*/}
                <Input
                  onBlur={handleBlur('pmonth')}
                  onChangeText={handleChange('pmonth')}
                  value={values.pmonth}
                  w="25%"
                />
                {/*year input*/}
                <Input
                  onBlur={handleBlur('pyear')}
                  onChangeText={handleChange('pyear')}
                  value={values.pyear}
                  w="50%"
                />
              </HStack>
              <HStack>
                {/*Captions*/}
                <FormControl.HelperText w="30%">MM</FormControl.HelperText>
                <FormControl.HelperText w="30%">DD</FormControl.HelperText>
                <FormControl.HelperText>YYYY</FormControl.HelperText>
              </HStack>
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>City</FormControl.Label>
              <Input
                onBlur={handleBlur('city')}
                onChangeText={handleChange('city')}
                value={values.city}
                placeholder="City"
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Location of Incident</FormControl.Label>
              <Input
                onBlur={handleBlur('location')}
                onChangeText={handleChange('location')}
                value={values.location}
                placeholder="Address/Landmarks"
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Type of Incident</FormControl.Label>
              <Input
                onBlur={handleBlur('incidentType')}
                onChangeText={handleChange('incidentType')}
                value={values.incidentType}
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Description of Perpetrator</FormControl.Label>
              <Input
                onBlur={handleBlur('perpetratorDesc')}
                onChangeText={handleChange('perpetratorDesc')}
                value={values.perpetratorDesc}
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Description of Vehicle</FormControl.Label>
              <Input
                onBlur={handleBlur('vehicleDesc')}
                onChangeText={handleChange('vehicleDesc')}
                value={values.vehicleDesc}
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Details of Incident</FormControl.Label>
              <Input
                onBlur={handleBlur('incident')}
                onChangeText={handleChange('incident')}
                value={values.incident}
              />
            </FormControl>
            {/*Submits when submit button is pressed*/}
            <Button
              onPress={handleSubmit}
              colorScheme="pink"
              w="30%"
              justifyContent="space-around">
              Submit
            </Button>
          </VStack>
        </ScrollView>
      )}
    </Formik>
  );
}

const Layout = () => {
  return (
    <NativeBaseProvider>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.pageContainer}>
          <AddReport />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const AdminStack = createStackNavigator();

const AdminPage = () => {
  return (
    <>
      <AdminStack.Navigator>
        <AdminStack.Screen
          name="Admin"
          component={Layout}
          options={{
            headerTitle: 'Add a Processed Report',
          }}
        />
      </AdminStack.Navigator>
    </>
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 90,
    backgroundColor: '#fff',
  },
});
