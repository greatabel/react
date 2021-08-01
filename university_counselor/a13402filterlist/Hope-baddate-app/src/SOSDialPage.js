/*
  Dummy SOS dial page
  To be replaced by actual dial function
*/
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Layout = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.pageContainer}>
        <Text>
          SOS Dial page. (Replace this page with actual dial function)
        </Text>
      </View>
    </ScrollView>
  );
};

const SOSStack = createStackNavigator();

const SOSDialPage = () => {
  return (
    <>
      <SOSStack.Navigator>
        <SOSStack.Screen
          name="SOS Dial Page"
          component={Layout}
          options={{
            headerTitle: 'SOS Dial Page',
          }}
        />
      </SOSStack.Navigator>
    </>
  );
};

export default SOSDialPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
