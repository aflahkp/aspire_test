import React from 'react';
import {Text, View} from 'react-native';
import strings from '../../constants/strings';
import styles from './styles';

const Header = ({balance = '3,000'}) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>{strings.debitCard}</Text>
        <Text style={styles.availableBalance}>{strings.availableBalance}</Text>
        <View style={styles.balanceContainer}>
          <View style={styles.sdollarContainer}>
            <Text style={styles.sdollar}>{strings.sdollar}</Text>
          </View>
          <Text style={styles.amount}>{balance}</Text>
        </View>
      </View>
      <View style={styles.bottomCurve} />
    </View>
  );
};

export default Header;
