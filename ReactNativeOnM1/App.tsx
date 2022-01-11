import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />



        <Stack.Screen name="ProfileFG" component={ProfileFGScreen} />
        <Stack.Screen name="ProfileBIN" component={ProfileBINScreen} />
        <Stack.Screen name="ProfileLotCode" component={ProfileLotCodeScreen} />
      </Stack.Navigator>


    </NavigationContainer>


  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
   
    <Button
      title="Build FG Pallet"
      onPress={() =>
        navigation.navigate('ProfileFG', { name: 'FG' })
      }
    />
    <Button
      title="Build BIN"
      onPress={() =>
        navigation.navigate('ProfileBIN', { name: 'BIN' })
      }
    />
    <Button
      title="Audit Lot Code"
      onPress={() =>
        navigation.navigate('ProfileLotCode', { name: 'LotCode' })
      }
    />
    </View>
  );
};



const ProfileFGScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profileFG</Text>;
};

const ProfileBINScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s ProfileBINScreen</Text>;
};

const ProfileLotCodeScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s ProfileBINScreen</Text>;
};


export default MyStack;
