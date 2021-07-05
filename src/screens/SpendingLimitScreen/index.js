import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './styles';
import Theme from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import strings from '../../constants/strings';
import {meter} from '../../assets/images';
import Button from '../../components/Button';
import {onSave} from './helpers';

const SpendingLimitScreen = ({navigation: {goBack}}) => {
  const [limit, setLimit] = useState('5,000');
  const [limitAmounts, setLimitAmounts] = useState([
    '5,000',
    '10,000',
    '20,000',
  ]);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.Colors.dark} />
      <Header back title={strings.spendingLimit} />
      <View style={styles.curve} />
      <View style={styles.dataContainer}>
        <View style={styles.titleWithIcon}>
          <Image source={meter} />
          <Text style={styles.subTitle}>{strings.setWeeklyDebitLimit}</Text>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.sdollarContainer}>
            <Text style={styles.sdollar}>{strings.sdollar}</Text>
          </View>
          <Text style={styles.amount}>{limit}</Text>
        </View>
        <Text style={styles.message}>{strings.weekDefenition}</Text>
        <View style={styles.limitOptionsRow}>
          {limitAmounts.map(amount => (
            <View style={styles.lightContainer}>
              <Text style={styles.limiOptionText}>
                {strings.sdollar} {amount}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Button
        title={strings.save}
        style={styles.buttonStyle}
        onPress={onSave({goBack})}
      />
    </SafeAreaView>
  );
};

export default SpendingLimitScreen;
