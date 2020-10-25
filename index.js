/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUp from './src/components/SignUp/SignUp';
import LoginPage from './src/components/LoginPage/LoginPage';
import MarketPage from './src/components/MarketPage/MarketPage';
import InterestPage from './src/components/AccountPage/InterestPick.js'

AppRegistry.registerComponent(appName, () => App);

