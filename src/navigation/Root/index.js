import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainBottomTabNavigation from '../MainBottomTabNavigation';
import SpendingLimitScreen from '../../screens/SpendingLimitScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import screenNames from '../../constants/screenNames';
import {store, persistor} from '../../store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {navigationRef} from '../helpers';

export default function Root() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen
                name={screenNames.mainScreen}
                component={MainBottomTabNavigation}
              />
              <Stack.Screen
                name={screenNames.spendingLimitScreen}
                component={SpendingLimitScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
