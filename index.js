/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/navigation/Root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
