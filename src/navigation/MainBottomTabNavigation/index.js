import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DebitCardScreen from '../../screens/DebitCardScreen';
import screenNames from '../../constants/screenNames';
import strings from '../../constants/strings';
import PlaneScreen from '../../screens/PlaneScreen';
import {
  aspire,
  paymentIcon,
  debitCardIcon,
  creditIcon,
  profileIcon,
} from '../../assets/images';
import styles from './styles';
import Theme from '../../theme';

const Tab = createBottomTabNavigator();

export default function MainBottomTabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Theme.Colors.primary,
        inactiveTintColor: Theme.Colors.inactive,
        labelStyle: styles.labelStyle,
        style: styles.tabBarStyle,
      }}
      initialRouteName={screenNames.debitCardScreen}>
      <Tab.Screen
        name={screenNames.homeScreen}
        component={PlaneScreen}
        options={{
          tabBarLabel: strings.home,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={styles.tabBarIcon}
              tintColor={color}
              source={aspire}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.debitCardScreen}
        component={DebitCardScreen}
        options={{
          tabBarLabel: strings.debitCard,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={styles.tabBarIcon}
              tintColor={color}
              source={debitCardIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.paymentsScreen}
        component={PlaneScreen}
        options={{
          tabBarLabel: strings.payments,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={styles.tabBarIcon}
              tintColor={color}
              source={paymentIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.creditScreen}
        component={PlaneScreen}
        options={{
          tabBarLabel: strings.credit,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={styles.tabBarIcon}
              tintColor={color}
              source={creditIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.profileScreen}
        component={PlaneScreen}
        options={{
          tabBarLabel: strings.profile,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={styles.tabBarIcon}
              tintColor={color}
              source={profileIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
