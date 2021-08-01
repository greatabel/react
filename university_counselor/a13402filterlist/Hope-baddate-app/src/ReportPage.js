import * as React from 'react';
import {
  VStack,
  HStack,
  Input,
  Button,
  FormControl,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Heading,
  Divider,
  TextArea,
  Radio,
  useToast,
  Alert,
  Collapse,
} from 'native-base';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Formik} from 'formik';
import {createStackNavigator} from '@react-navigation/stack';
import * as yup from 'yup';
import Axios from 'axios';

const validationSchema = yup.object().shape({
  incidentLocation: yup.string().required('Please enter location of incident'),
  arranged: yup.string().required('Please enter how the date was arranged'),
  incident: yup.string().required('Please describe the incident'),
  policeReport: yup.string().required('Please choose one'),
  publicAlert: yup.string().required('Please choose one'),
  pickUp: yup.string().required('Please select one'),
  email: yup.string().email('Enter valid email'),
  age: yup.number().positive().integer(),
});
/*
  Form Layout Page using Native Base and Formik with basic validation.
*/
function FormScreen() {
  const toast = useToast();
  /*Takes data submitted and outputs it into the console log */
  const onSubmit = (data, {resetForm}) => {
    console.log('submiting with ', data);
    toast.show({
      title: 'Submission sent',
      status: 'success',
      description: 'Thank you for your submission!',
      placement: 'top-left',
    });
    Axios.post('http://localhost:3002/api/create', data);
    resetForm({data: ''});
  };
  /*reads the state and sets the values for each select option */
  const [value, setValue] = React.useState('');
  const [doorValue, setDoorValue] = React.useState('');
  const [typeValue, setTypeValue] = React.useState('');
  const [modelValue, setModelValue] = React.useState('');

  return (
    /*
    Field names.
    Default values displayed in console log if any of the fields are empty */
    <Formik
      initialValues={{
        agency: '',
        volunteerFName: '',
        volunteerLName: '',
        email: '',
        day: '',
        month: '',
        year: '',
        hour: '',
        minute: '',
        amOrPm: '',
        incidentLocation: '',
        pickUp: '',
        arranged: '',
        pickUpLocation: '',
        colour: '',
        license: '',
        doors: '',
        condition: '',
        type: '',
        model: '',
        suspectFName: '',
        suspectLName: '',
        age: '',
        hair: '',
        build: '',
        identifier: '',
        nationality: '',
        smells: '',
        incident: '',
        policeReport: '',
        publicAlert: '',
      }}
      validationSchema={validationSchema}
      /*Actions that take place onSubmit */
      onSubmit={onSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        resetForm,
      }) => (
        <ScrollView>
          <VStack space={3} mx={6} my={5}>
            <FormControl>
              {/*Basic Input field structure */}
              <FormControl.Label>Agency Name</FormControl.Label>
              <Input
                onBlur={handleBlur('agency')}
                /*takes value and updates the field name value */
                onChangeText={handleChange('agency')}
                value={values.agency}
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Staff Volunteer Name</FormControl.Label>
              <HStack space={3}>
                <Input
                  w="50%"
                  onBlur={handleBlur('volunteerFName')}
                  onChangeText={handleChange('volunteerFName')}
                  value={values.volunteerFName}
                />
                <Input
                  w="50%"
                  onBlur={handleBlur('volunteerLName')}
                  onChangeText={handleChange('volunteerLName')}
                  value={values.volunteerLName}
                />
              </HStack>
              <HStack>
                {/*Captions */}
                <FormControl.HelperText w="55%">
                  First Name
                </FormControl.HelperText>
                <FormControl.HelperText>Last Name</FormControl.HelperText>
              </HStack>
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl isInvalid={'email' in errors}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {errors.email}
            </FormControl>
            {/*Basic Input field structure for Date */}
            <FormControl>
              <FormControl.Label>Date of Incident</FormControl.Label>
              <HStack space={3}>
                {/*Day input*/}
                <Input
                  onBlur={handleBlur('day')}
                  onChangeText={handleChange('day')}
                  value={values.day}
                  w="25%"
                />
                {/*month input*/}
                <Input
                  onBlur={handleBlur('month')}
                  onChangeText={handleChange('month')}
                  value={values.month}
                  w="25%"
                />
                {/*year input*/}
                <Input
                  onBlur={handleBlur('year')}
                  onChangeText={handleChange('year')}
                  value={values.year}
                  w="45%"
                />
              </HStack>
              <HStack>
                {/*Captions*/}
                <FormControl.HelperText w="30%">MM</FormControl.HelperText>
                <FormControl.HelperText w="30%">DD</FormControl.HelperText>
                <FormControl.HelperText>YYYY</FormControl.HelperText>
              </HStack>
            </FormControl>
            {/*Basic Date field structure */}
            <FormControl>
              <FormControl.Label>Time of Incident</FormControl.Label>
              <HStack space={3}>
                {/*hour input*/}
                <Input
                  onBlur={handleBlur('hour')}
                  onChangeText={handleChange('hour')}
                  value={values.hour}
                  w="20%"
                />
                <Text style={styles.textStyles}>:</Text>
                {/*minute input*/}
                <Input
                  onBlur={handleBlur('minute')}
                  onChangeText={handleChange('minute')}
                  value={values.minute}
                  w="20%"
                />
                <Radio.Group
                  name="amOrPm"
                  aria-label="amOrPm"
                  onChange={handleChange('amOrPm')}
                  value={values.amOrPm}>
                  <Radio value="Am" aria-label="Am" my={1}>
                    AM
                  </Radio>
                  <Radio value="Pm" aria-label="Pm" my={1}>
                    PM
                  </Radio>
                </Radio.Group>
              </HStack>
              <HStack>
                {/*Captions*/}
                <FormControl.HelperText w="30%">HH</FormControl.HelperText>
                <FormControl.HelperText w="30%">MM</FormControl.HelperText>
              </HStack>
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl isRequired isInvalid={'incidentLocation' in errors}>
              <FormControl.Label>Location of Incident</FormControl.Label>
              <Input
                onBlur={handleBlur('incidentLocation')}
                onChangeText={handleChange('incidentLocation')}
                value={values.incidentLocation}
                placeholder="Address/Landmarks"
              />
              {errors.incidentLocation}
            </FormControl>
            {/*Basic Select option structure */}
            <FormControl isRequired isInvalid={'pickUp' in errors}>
              <FormControl.Label>Picked Up By</FormControl.Label>
              <Select
                selectedValue={value || 'Foot'}
                minWidth={200}
                accessibilityLabel="Picked Up By"
                /*takes value and updates the field name value and on screen Select value*/
                onValueChange={itemValue => {
                  setFieldValue('pickUp', itemValue);
                  setValue(itemValue);
                }}
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt={1}>
                <Select.Item label="Foot" value="Foot" />
                <Select.Item label="Car" value="Car" />
                <Select.Item label="Truck" value="Truck" />
                <Select.Item label="Bicycle" value="Bicycle" />
                <Select.Item label="Other" value="Other" />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
              </Select>
              {errors.pickUp}
            </FormControl>
            <FormControl isRequired isInvalid={'arranged' in errors}>
              {/*Basic Input field structure */}
              <FormControl.Label>How was date arranged?</FormControl.Label>
              <Input
                onBlur={handleBlur('arranged')}
                onChangeText={handleChange('arranged')}
                value={values.arranged}
              />
              {/*Captions */}
              <FormControl.HelperText>
                Street/Parlour/Online
              </FormControl.HelperText>
              {errors.arranged}
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Location Picked Up</FormControl.Label>
              <Input
                onBlur={handleBlur('pickUpLocation')}
                onChangeText={handleChange('pickUpLocation')}
                value={values.pickUpLocation}
                placeholder="Address/Landmarks"
              />
            </FormControl>
            {/*Header and divider*/}
            <Heading alignSelf={{base: 'center'}} size="sm">
              {' '}
              Description of Vehicle
            </Heading>
            <Divider size={2} />
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Colour</FormControl.Label>
              <Input
                onBlur={handleBlur('colour')}
                onChangeText={handleChange('colour')}
                value={values.colour}
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>License Plate</FormControl.Label>
              <Input
                onBlur={handleBlur('license')}
                onChangeText={handleChange('license')}
                value={values.license}
              />
            </FormControl>
            {/*Basic Select option structure */}
            <FormControl>
              <FormControl.Label>Number of Doors</FormControl.Label>
              <Select
                selectedValue={doorValue || 'Two'}
                minWidth={200}
                accessibilityLabel="Number of Doors"
                onValueChange={itemValue => {
                  setFieldValue('doors', itemValue);
                  setDoorValue(itemValue);
                }}
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt={1}>
                <Select.Item label="Two" value="Two" />
                <Select.Item label="Four" value="Four" />
                <Select.Item label="Sliding Doors" value="Sliding Doors" />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
              </Select>
            </FormControl>
            {/*Basic Radio Button structure */}
            <FormControl>
              <FormControl.Label>Condition</FormControl.Label>
              <Radio.Group
                name="condition"
                aria-label="condition"
                onChange={handleChange('condition')}
                value={values.condition}>
                <Radio value="Old" aria-label="Old" my={1}>
                  Old
                </Radio>
                <Radio value="New" aria-label="New" my={1}>
                  New
                </Radio>
                <Radio value="Damaged" aria-label="Damaged" my={1}>
                  Damaged
                </Radio>
              </Radio.Group>
            </FormControl>
            {/*Basic Select option structure */}
            <FormControl>
              <FormControl.Label>Make/Model</FormControl.Label>
              <Select
                selectedValue={modelValue || 'Acura'}
                minWidth={200}
                accessibilityLabel="Make/Model"
                onValueChange={itemValue => {
                  setFieldValue('model', itemValue);
                  setModelValue(itemValue);
                }}
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt={1}>
                <Select.Item label="Acura" value="Acura" />
                <Select.Item label="Audi" value="Audi" />
                <Select.Item label="BMW" value="BMW" />
                <Select.Item label="Buick" value="Buick" />
                <Select.Item label="Cadillac" value="Cadillac" />
                <Select.Item label="Chevrolet" value="Chevrolet" />
                <Select.Item label="Chrysler" value="Chrysler" />
                <Select.Item label="Dodge" value="Dodge" />
                <Select.Item label="Four" value="Four" />
                <Select.Item label="Two" value="Two" />
                <Select.Item label="Ford" value="Ford" />
                <Select.Item label="GMC" value="GMC" />
                <Select.Item label="Honda" value="Honda" />
                <Select.Item label="Hyundai" value="Hyundai" />
                <Select.Item label="Infiniti" value="Infiniti" />
                <Select.Item label="Isuzu" value="Isuzu" />
                <Select.Item label="Jaguar" value="Jaguar" />
                <Select.Item label="Jeep" value="Jeep" />
                <Select.Item label="KIA" value="KIA" />
                <Select.Item label="Land Rover" value="Land Rover" />
                <Select.Item label="Lexus" value="Lexus" />
                <Select.Item label="Lincoln" value="Lincoln" />
                <Select.Item label="Mazda" value="Mazda" />
                <Select.Item label="Mercedes-Benz" value="Mercedes-Benz" />
                <Select.Item label="Mercury" value="Mercury" />
                <Select.Item label="Mini" value="Mini" />
                <Select.Item label="Mitsubishi" value="Mitsubishi" />
                <Select.Item label="Nissan" value="Nissan" />
                <Select.Item label="Pontiac" value="Pontiac" />
                <Select.Item label="Porsche" value="Porsche" />
                <Select.Item label="Saab" value="Saab" />
                <Select.Item label="Saturn" value="Saturn" />
                <Select.Item label="Scion" value="Scion" />
                <Select.Item label="Subaru" value="Subaru" />
                <Select.Item label="Suzuki" value="Suzuki" />
                <Select.Item label="Tesla" value="Tesla" />
                <Select.Item label="Toyota" value="Toyota" />
                <Select.Item label="Volvo" value="Volvo" />
                <Select.Item label="VW" value="VW" />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
              </Select>
            </FormControl>
            {/*Basic Select option structure */}
            <FormControl>
              <FormControl.Label>Type</FormControl.Label>
              <Select
                selectedValue={typeValue || 'Sedan'}
                minWidth={200}
                accessibilityLabel="Type"
                onValueChange={itemValue => {
                  setFieldValue('type', itemValue);
                  setTypeValue(itemValue);
                }}
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt={1}>
                <Select.Item label="Sedan" value="Sedan" />
                <Select.Item label="Hatch-back" value="Hatch-back" />
                <Select.Item label="Sports Car" value="Sports Car" />
                <Select.Item label="Convertible" value="Convertible" />
                <Select.Item label="Station Wagon" value="Station Wagon" />
                <Select.Item label="SUV" value="SUV" />
                <Select.Item label="Minivan" value="Minivan" />
                <Select.Item label="Pickup Truck" value="Pickup Truck" />
                <Select.Item label="Cube Van" value="Cube Van" />
                <Select.Item label="Panel Van" value="Panel Van" />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
                <Select.Item label="" value=" " />
              </Select>
            </FormControl>
            {/*Header and divider */}
            <Heading alignSelf={{base: 'center'}} size="sm">
              {' '}
              Description of Suspect
            </Heading>
            <Divider size={2} />
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <HStack space={3}>
                <Input
                  w="50%"
                  onBlur={handleBlur('suspectFName')}
                  onChangeText={handleChange('suspectFName')}
                  value={values.suspectFName}
                />
                <Input
                  w="50%"
                  onBlur={handleBlur('suspectLName')}
                  onChangeText={handleChange('suspectLName')}
                  value={values.suspectLName}
                />
              </HStack>
              <HStack>
                {/*Captions */}
                <FormControl.HelperText w="55%">
                  First Name
                </FormControl.HelperText>
                <FormControl.HelperText>Last Name</FormControl.HelperText>
              </HStack>
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl isInvalid={'age' in errors}>
              <FormControl.Label>Age</FormControl.Label>
              <Input
                onBlur={handleBlur('age')}
                onChangeText={handleChange('age')}
                value={values.age}
              />
              {errors.age}
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Hair Colour/Type</FormControl.Label>
              <Input
                onBlur={handleBlur('hair')}
                onChangeText={handleChange('hair')}
                value={values.hair}
                placeholder="Eg: 6ft/200lbs/muscular"
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Height/Weight/Build</FormControl.Label>
              <Input
                onBlur={handleBlur('build')}
                onChangeText={handleChange('build')}
                value={values.build}
                placeholder="Eg: 6ft/200lbs/muscular"
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Tattoos & Scars</FormControl.Label>
              <Input
                onBlur={handleBlur('identifier')}
                onChangeText={handleChange('identifier')}
                value={values.identifier}
                placeholder="Distinguishing marks: what &where"
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Nationality</FormControl.Label>
              <Input
                onBlur={handleBlur('nationality')}
                onChangeText={handleChange('nationality')}
                value={values.nationality}
                placeholder="Accent/Known nationality"
              />
            </FormControl>
            {/*Basic Input field structure */}
            <FormControl>
              <FormControl.Label>Smells</FormControl.Label>
              <Input
                onBlur={handleBlur('smells')}
                onChangeText={handleChange('smells')}
                value={values.smells}
                placeholder="Cologne? Substances?"
              />
            </FormControl>
            {/*Header and divider */}
            <Heading alignSelf={{base: 'center'}} size="sm">
              {' '}
              Incident
            </Heading>
            <Divider size={2} />
            {/*Basic Text area structure */}
            <FormControl isRequired isInvalid={'incident' in errors}>
              <FormControl.Label>Description of Incident</FormControl.Label>
              <TextArea
                onBlur={handleBlur('incident')}
                onChangeText={handleChange('incident')}
                value={values.incident}
                placeholder="What happened (in as much detail as possible)"
              />
              {errors.incident}
            </FormControl>
            {/*Basic Radio Button structure */}
            <FormControl isRequired isInvalid={'policeReport' in errors}>
              <FormControl.Label>
                Do you want to report this to the Police?
              </FormControl.Label>
              <Radio.Group
                name="policeReport"
                aria-label="policeReport"
                onChange={handleChange('policeReport')}
                value={values.policeReport}>
                <Radio value="Yes" aria-label="Yes" my={1}>
                  Yes
                </Radio>
                <Radio value="No" aria-label="No" my={1}>
                  No
                </Radio>
              </Radio.Group>
              {errors.policeReport}
            </FormControl>
            {/*Basic Radio Button structure */}
            <FormControl isRequired isInvalid={'publicAlert' in errors}>
              <FormControl.Label>
                Would you like this to appear as a public alert?
              </FormControl.Label>
              <Radio.Group
                name="publicAlert"
                aria-label="publicAlert"
                onChange={handleChange('publicAlert')}
                value={values.publicAlert}>
                <Radio value="Yes" aria-label="Yes" my={1}>
                  Yes
                </Radio>
                <Radio value="No" aria-label="No" my={1}>
                  No
                </Radio>
              </Radio.Group>
              {errors.publicAlert}
            </FormControl>
            {/*Submits when submit button is pressed*/}
            <HStack justifyContent="space-around">
              <Button
                onPress={handleSubmit}
                colorScheme="pink"
                w="30%"
                justifyContent="space-around">
                Submit
              </Button>
              <Button
                onPress={resetForm}
                colorScheme="blue"
                w="30%"
                justifyContent="space-around">
                Reset
              </Button>
            </HStack>
            <Collapse isOpen={Object.keys(errors).length > 0}>
              <Alert status="error">
                <Alert.Icon />
                <Alert.Title>Error Alert</Alert.Title>
                <Alert.Description>
                  Please fill out all required fields.
                </Alert.Description>
              </Alert>
            </Collapse>
          </VStack>
        </ScrollView>
      )}
    </Formik>
  );
}

/*
  Layout for report page
*/
const Layout = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.pageContainer}>
          <FormScreen />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

/*
  Defines stack navigation for report page for use with buttons
  Add stack screens when necessary
*/
const ReportStack = createStackNavigator();

const ReportPage = () => {
  return (
    <>
      <ReportStack.Navigator>
        <ReportStack.Screen
          name="Report Page"
          component={Layout}
          options={{
            headerTitle: 'Report A Bad Date',
          }}
        />
      </ReportStack.Navigator>
    </>
  );
};

export default ReportPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingBottom: 90,
    backgroundColor: '#fff',
  },
  textStyles: {
    fontSize: 30,
  },
});
