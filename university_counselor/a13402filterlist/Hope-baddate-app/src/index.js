/**
 * Entry point of web app
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/* Load web app */
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});