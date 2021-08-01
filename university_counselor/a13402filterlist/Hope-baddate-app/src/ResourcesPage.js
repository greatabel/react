/*
  Dummy page for resources page
  Includes stack navigation for potential navigation needs
*/
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Layout = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.pageContainer}>
        <Text>Resources page.</Text>
      </View>
    </ScrollView>
  );
};

const ResourcesStack = createStackNavigator();

const ResourcesPage = () => {
  return (
    <>
      <ResourcesStack.Navigator>
        <ResourcesStack.Screen
          name="Resources Page"
          component={Layout}
          options={{
            headerTitle: 'Resources',
          }}
        />
      </ResourcesStack.Navigator>
    </>
  );
};

export default ResourcesPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
