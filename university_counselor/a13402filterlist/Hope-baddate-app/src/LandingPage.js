/*
  Defines layout for and navigations from landing page
*/
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TabActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Page imports
import ReportPage from './ReportPage';
import AdminPage from './Admin';

/*
  Layout for Landing Page
  Uses navigation param for button navigation
*/
const Layout = ({navigation}) => {
  /*
    Navigate to bad date report
  */
  function ToReportPage() {
    const jumpToAction = TabActions.jumpTo('Report');
    return navigation.dispatch(jumpToAction);
  }

  /*
    SOS Emergency dial function here
  */
  function DialSOS() {
    return Alert.alert(
      'SOS Button Pressed. Same function as red call button in nav bar.',
    );
  }

  /*
    Link to hope outreach website
  */
  function ToHopePage() {
    Linking.openURL('https://www.hopeokanagan.com');
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.pageContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Submit a Bad Date Report</Text>
          <Button
            onPress={() => {
              ToReportPage();
            }}
            title="Submit a Bad Date Report"
            color="#2586DD"
            accessibilityLabel="Tap to submit a bad date report"
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionDescription}>
            H.O.P.E. (Helping Out People Exploited) Outreach is a local Kelowna
            and Vernon based organization with the intention of helping out
            vulnerable and exploited women in our community. For more
            information, please visit our website at
          </Text>
          <TouchableOpacity onPress={() => ToHopePage()}>
            <Text>https://www.hopeokanagan.com</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Emergency Dial</Text>
          <Button
            onPress={() => {
              DialSOS();
            }}
            title="Dial A Friend For Help"
            color="#D40000"
            accessibilityLabel="Tap to dial a friend for help"
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>24/7 Support Hotline:</Text>
          <Text style={styles.sectionInfo}>250-258-7162</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Button
            onPress={() => {
              navigation.navigate('Admin Page');
            }}
            title="Admin Page"
            color="#303233"
            accessibilityLabel="Tap to go to admin page"
          />
        </View>
      </View>
    </ScrollView>
  );
};

/*
  Defines stack navigation for landing page for use with buttons
  Screens include:
  1. Landing page layout
  2. App Info Page
  3. Report Page
*/
const HomeStack = createStackNavigator();

const LandingPage = ({navigation}) => {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Landing Page"
          component={Layout}
          options={() => ({
            headerTitle: 'HOPE Okanagan',
          })}
        />
        <HomeStack.Screen
          name="Report Page"
          component={ReportPage}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Admin Page"
          component={AdminPage}
          options={{
            headerTitle: 'Sample admin page.',
            headerShown: false,
          }}
        />
      </HomeStack.Navigator>
    </>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 5,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  sectionInfo: {
    fontSize: 18,
    alignItems: 'center',
    padding: 5,
  },
});
