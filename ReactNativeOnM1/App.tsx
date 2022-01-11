import * as React from 'react';
import  { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';


// terminal:
// cd "/Users/abel/AbelProject/react/ReactNativeOnM1" && npx react-native run-android


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
  const [lpn, setLpn] = useState('');
  const [text, setText] = useState('');
  const [totaltext, setTotaltext] = useState('');
  var total_t = ''
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="License Plate Number"
        onChangeText={lpn => setLpn(lpn)}
        defaultValue={lpn}
      />
      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="Lot Codde"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

<Button color="orange" title='Add' onPress={() => {
        if (text !=''){
          total_t +=  ' ' + text
           Alert.alert(total_t)
        }
      }}/>

      <Text style={{padding: 10, fontSize: 22}}>
        {text}
      </Text>

<Button color="orange" title='Submit' onPress={() => {
        if (text !=''){
          
fetch('https://beta.manage.bidfta.com/lotting/bin-product', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    binNumber: lpn,
    secondParam: [
      total_t
    ]

  })
});
// .then((response) => Alert.alert(response.json()));
Alert.alert('post finished!')


        }
      }}/>
    </View>
  );
};

const ProfileBINScreen = ({ navigation, route }) => {
 const [lpn, setLpn] = useState('');
  const [text, setText] = useState('');
  const [totaltext, setTotaltext] = useState('');
  var total_t = ''
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="License BIN Number"
        onChangeText={lpn => setLpn(lpn)}
        defaultValue={lpn}
      />
      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="Lot Codde"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

<Button color="orange" title='Add' onPress={() => {
        if (text !=''){
          total_t +=  ' ' + text
           Alert.alert(total_t)
        }
      }}/>

      <Text style={{padding: 10, fontSize: 22}}>
        {text}
      </Text>

<Button color="orange" title='Submit' onPress={() => {
        if (text !=''){
          
fetch('https://beta.manage.bidfta.com/lotting/bin-product', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    binNumber: lpn,
    secondParam: [
      total_t
    ]

  })
});
// .then((response) => Alert.alert(response.json()));
Alert.alert('post finished!')


        }
      }}/>
    </View>
  );
};

const ProfileLotCodeScreen = ({ navigation, route }) => {
 const [lpn, setLpn] = useState('');
  const [text, setText] = useState('');
  const [totaltext, setTotaltext] = useState('');
  var total_t = ''
  return (
    <View style={{padding: 10}}>

      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="Lot Code"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />



      <Text style={{padding: 10, fontSize: 22}}>
        {text}
      </Text>

<Button color="orange" title='Find' onPress={() => {
        if (text !=''){
          
fetch('https://beta.manage.bidfta.com/lotting/lotted-products-by-lotcode/'+text)
    .then((response) => response.json())
    .then((json) => {
      // return json.movies;

      Alert.alert('id: '+json.lottedProduct.id.toString() + '\n',
        'title: '+json.lottedProduct.title.toString() + '\n'
        +'quality: '+ json.lottedProduct.quantity.toString()+ '\n'
        +'lotCode: ' + json.lottedProduct.lotCode.toString()+ '\n'
        )

    })
    .catch((error) => {
      console.error(error);
    });
// .then((response) => Alert.alert(response.json()));



        }
      }}/>
    </View>
  );
};


export default MyStack;
