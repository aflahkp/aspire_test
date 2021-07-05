import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainBottomTabNavigation from '../MainBottomTabNavigation';
import SpendingLimitScreen from '../../screens/SpendingLimitScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import screenNames from '../../constants/screenNames';

export default function Root() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
  );
}
