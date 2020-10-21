/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUp from './src/components/SignUp/SignUp'
import LoginPage from './src/components/LoginPage/LoginPage'

AppRegistry.registerComponent(appName, () => LoginPage);

