/* eslint-disable react-native/no-inline-styles */
/*
  Defines layout and functionality of bottom navigation bar
*/
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

/* Page imports */
import LandingPage from './LandingPage';
import ReportPage from './ReportPage';
import SOSDialPage from './SOSDialPage';
import ResourcesPage from './ResourcesPage';
import ListPage from './ListPage';

/* Icon imports */
import home from './assets/home.png';
import resources from './assets/resources.png';
import sos from './assets/sos.png';
import report from './assets/report.png';
import list from './assets/list.png';

/*
  SOSButton for bottom nav bar
*/
const SOSButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#E32F45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

/*
  Layout and function of bottom nav bar
  Tabs include:
  1. Landing page (Home)
  2. Resources page
  3. SOS Dial Button
  4. Report Page
  5. List page
*/
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: Platform.OS === 'web' ? 'static' : 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={LandingPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text
                style={{color: focused ? '#E32F45' : '#748C94', fontSize: 12}}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={resources}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text
                style={{color: focused ? '#E32F45' : '#748C94', fontSize: 12}}>
                RESOURCES
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SOS"
        component={SOSDialPage}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={sos}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#FFFFFF',
              }}
            />
          ),
          tabBarButton: props => <SOSButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={report}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#E32F45' : '#748C94',
                  fontSize: 12,
                }}>
                REPORT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={list}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text
                style={{color: focused ? '#E32F45' : '#748C94', fontSize: 12}}>
                LIST
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabs;
