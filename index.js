/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import './app/styles/variables';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
