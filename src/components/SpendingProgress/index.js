import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import strings from '../../constants/strings';
import styles from './styles';

const SpendingProgress = ({amountSpent = 0, limitAmount = 0, style}) => {
  const getProgress = () => {
    if (limitAmount === 0) {
      return 0;
    }

    return (parseInt(amountSpent, 10) / parseInt(limitAmount, 10)) * 100;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{strings.debitCardSpendingLimt}</Text>
        <Text style={styles.amountSpent}>${amountSpent}</Text>
        <Text style={styles.divider}>|</Text>
        <Text style={styles.limitAmount}>${limitAmount}</Text>
      </View>
      <View style={styles.progressContainer}>
        {!!amountSpent && (
          <>
            <View
              style={[styles.currentProgress, {width: `${getProgress()}%`}]}
            />
            <View style={styles.currentProgressTip} />
          </>
        )}
      </View>
    </View>
  );
};

export default SpendingProgress;
