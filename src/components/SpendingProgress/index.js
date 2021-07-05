import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import strings from '../../constants/strings';
import styles from './styles';

const SpendingProgress = ({
  amountSpent = '345',
  limitAmount = '5,000',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{strings.debitCardSpendingLimt}</Text>
        <Text style={styles.amountSpent}>${amountSpent}</Text>
        <Text style={styles.divider}>|</Text>
        <Text style={styles.limitAmount}>${limitAmount}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.currentProgress} />
      </View>
    </View>
  );
};

export default SpendingProgress;
