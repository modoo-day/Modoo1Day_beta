/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Preference from "./src/components/LoginPage/SignUp/Preference";

AppRegistry.registerComponent(appName, () => Preference);
